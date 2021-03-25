const ZKLib = require('node-zklib/zklib')

const ZkConfig = {
    ip: '192.168.0.201',
    port: 4370,
    inport: 5200,
    timeout: 5000,
  }

const test = async () => {


    let zkInstance = new ZKLib('192.168.0.201', 4370, 10000, 4000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket()


        // Get general info like logCapacity, user counts, logs count
        // It's really useful to check the status of device 
        console.log(await zkInstance.getInfo())
    } catch (e) {
    }

    // Disconnect the machine ( don't do this when you need realtime update :))) 
    // const users = await zkInstance.getUsers();
    // console.log(users.data.length);

    const attendences = await zkInstance.getAttendances();
    console.log(attendences.data);

    // const users = await zkInstance.getUsers();
    // console.log(users.data)

}

test()