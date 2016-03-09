package login;

public class login {
    String UserId, Password;

    login(String password, String userId) {
        Password = password;
        UserId = userId;
    }

    public String getPassword() {
        return Password;
    }

    public String getUserId() {
        return UserId;
    }
}