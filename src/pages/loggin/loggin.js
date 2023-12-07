import './style.css'
function Loggin() {
    return ( <div>
        <div class="login-container">
    <div class="login-header">
        <h2>Đăng nhập</h2>
    </div>
    <div class="login-form">
        <form>
            <div class="form-group">
                <label for="username">Tên đăng nhập:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <button type="submit">Đăng nhập</button>
            </div>
        </form>
    </div>
</div>
    </div> );
}

export default Loggin;