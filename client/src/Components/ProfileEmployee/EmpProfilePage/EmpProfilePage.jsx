import { EditOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React, { useState, useEffect } from "react";
import LowerPart from "../LowerPart/LowerPart";
import ProfileTableEmpTop from "../ProfileTable/ProfileTableEmpTop";
import { employeeProfile, updateEmployee } from "../../../Services/Employee";

const EmpProfilePage = ({ user_id }) => {
    const [employeeProfileState, setEmployeeProfileState] = useState({});
    const [edit, setEdit] = useState(false)

    const [load,setLoad] = useState({})

    const callEmployeeProfile = async () => {
        try {
            const response = await employeeProfile(user_id);
            setEmployeeProfileState(response.data.additionalPayload);

            // notification.success({
            //     message: "Success",
            //     description: "Employee Profile Loaded Successfully!",
            //     placement : "bottomRight",
            // });

        } catch (error) {
            notification.error({
                message: "Error",
                description:error.message || "Sorry! Something went wrong. Please try again!",
                placement : "bottomRight",
            });
            // console.log(error.response);
        }
    };

    

    const onEdit = () => {
        callEmployeeProfile();
        setEdit(!edit);
    };


    const onSave = async() => {

        try {
            // console.log();
            const res = await updateEmployee(load, user_id);
            setEmployeeProfileState(res.data.additionalPayload);
            notification["success"]({
                message: "Employee Updated Successfully",
                description:'',
                placement:"bottomRight"
            });
        } catch (error) {
            notification["error"]({
                message: error.message,
                description:'',
                placement:"bottomRight"
            });
        }
       onEdit();
    }


    useEffect(() => {
        callEmployeeProfile();
    }, [user_id,edit]);

    return (
        <div>
            <div style={{ marginBottom: "30px" }}>

                {!edit  ? <Button
                    onClick={onEdit}
                    primary
                    style={{ float: "right", margin: "10px" }}
                >
                    <EditOutlined key="ellipsis" />
                </Button> : 
                
                <Button
                    onClick={onSave}
                    primary
                    style={{ float: "right", margin: "10px" }}
                >
                    Save
                </Button>
                }

                <br />
            </div>
            <div style={{ marginTop: "30px" }}>
                <ProfileTableEmpTop
                    employeeProfileState={employeeProfileState}
                    load={load}
                    setLoad={setLoad}
                    edit={edit}
                    // callBack={callEmployeeProfile}
                ></ProfileTableEmpTop>
                <LowerPart 
                    employeeProfileState={employeeProfileState}
                    load={load}
                    setLoad={setLoad}
                    edit={edit}
                    // callBack={callEmployeeProfile}
                ></LowerPart>
            </div>
        </div>
    );
};

export default EmpProfilePage;
