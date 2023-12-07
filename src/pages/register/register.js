import './style.css'
function Register() {
    return ( 
<div class="register-container">
    <div class="register-header">
        <h2>Đăng ký</h2>
    </div>
    <div class="register-form">
        <form>
            <div class="form-group">
                <label for="username">Tên đăng nhập:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <button type="submit">Đăng ký</button>
            </div>
        </form>
    </div>
</div>
     );
}

export default Register;