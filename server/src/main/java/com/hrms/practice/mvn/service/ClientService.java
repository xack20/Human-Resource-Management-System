package com.hrms.practice.mvn.service;


import java.util.Map;

import com.hrms.practice.mvn.model.Client;
import com.hrms.practice.mvn.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
	private ClientRepository clientRepository;
    

    public Client saveClient(Map<String,Object>payload) {

		
		Client client = new Client();

		if(payload.get("company_name")!=null)client.setCompany_name((String)payload.get("company_name"));
		if(payload.get("designation")!=null)client.setDesignation((String)payload.get("designation"));
		if(payload.get("email")!=null)client.setEmail((String)payload.get("email"));
		
		if(payload.get("firstname")!=null)client.setFirstname((String)payload.get("firstname"));
		if(payload.get("lastname")!=null)client.setLastname((String)payload.get("lastname"));
		if(payload.get("phone_number")!=null)client.setPhoneNumber((String)payload.get("phone_number"));
        if(payload.get("birthday")!=null)client.setBirthday((String)payload.get("birthday"));
        if(payload.get("address")!=null)client.setAddress((String)payload.get("address"));
        if(payload.get("gender")!=null)client.setGender((String)payload.get("gender"));
		
	
		clientRepository.save(client);

	

		return client;
	}

    public boolean deleteClient(Map<String,Object> payload, long id){
		Client client = clientRepository.findByClientIdForDelete(id);

		if(client==null)return false;

		if(payload.get("deleted")!=null)client.setDeleted((Boolean)payload.get("deleted"));
	
		clientRepository.save(client);

		return true;
	}

    public Client updateClient(Map<String,Object> payload, long id){



		Client client = clientRepository.findByClientId(id);


		if(client==null)return null;

		if(payload != null){
			if(payload.get("company_name")!=null && !payload.get("company_name").equals("")) client.setCompany_name((String)payload.get("company_name"));
			if(payload.get("designation")!=null && !payload.get("designation").equals(""))client.setDesignation((String)payload.get("designation"));
			if(payload.get("email")!=null && !payload.get("email").equals(""))client.setEmail((String)payload.get("email"));
			
			if(payload.get("firstname")!=null && !payload.get("firstname").equals(""))client.setFirstname((String)payload.get("firstname"));
			if(payload.get("lastname")!=null && !payload.get("lastname").equals(""))client.setLastname((String)payload.get("lastname"));
			if(payload.get("phone_number")!=null && !payload.get("phone_number").equals(""))client.setPhoneNumber((String)payload.get("phone_number"));
			if(payload.get("birthday")!=null && !payload.get("birthday").equals(""))client.setBirthday((String)payload.get("birthday"));
			if(payload.get("address")!=null && !payload.get("address").equals(""))client.setAddress((String)payload.get("address"));
			if(payload.get("gender")!=null && !payload.get("gender").equals(""))client.setGender((String)payload.get("gender"));
			

		clientRepository.save(client);
        }
        return client;
    }

}
