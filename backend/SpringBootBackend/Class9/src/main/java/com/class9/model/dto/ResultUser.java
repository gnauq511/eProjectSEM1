package com.class9.model.dto;

import com.class9.model.User;

public class ResultUser {
    boolean result;
    User data;

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public User getData() {
        return data;
    }

    public void setData(User data) {
        this.data = data;
    }
}
