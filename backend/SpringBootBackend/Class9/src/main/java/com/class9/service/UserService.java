package com.class9.service;

import com.class9.model.User;
import com.class9.model.dto.ResultUser;
import com.class9.repository.UserRepository;
import com.class9.util.PasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {

        //encrypt password
        String encryptedPass
                = PasswordEncryptor.encryptPasswordMD5(user.getPassword());
        user.setPassword(encryptedPass);

        return userRepository.save(user);
    }

    public ResultUser loginUser(User user) {

        ResultUser resultUser = new ResultUser();

        Optional<User> existingUser
                = userRepository.findByUsername(user.getUsername());

        if(existingUser.isPresent()) {
            String existingPassword = existingUser.get().getPassword();

            if(PasswordEncryptor.encryptPasswordMD5(user.getPassword())
                    .equals(existingPassword)) {

                resultUser.setResult(true);
                resultUser.setData(new User(
                        existingUser.get().getId(),
                        existingUser.get().getUsername()
                ));

                return resultUser;
            }
        }

        //login failed
        resultUser.setResult(false);
        resultUser.setData(null);

        return resultUser;
    }

}
