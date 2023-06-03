import React from "react";

const Login = () => {
	return (
		<div className="login">
			<div className="login_left">
				{[1, 2, 3, 4, 5, 6].map(() => (
					<div className="login_left_option">
						<p className="login_left_name">admin1</p>
					</div>
				))}
			</div>
			<div className="login_right">
				<div className="login_right_container">
					<div className="login_right_option">
						<input
							type="text"
							className="login_right_input"
							placeholder="Tài khoản"
						/>
					</div>
					<div className="login_right_option">
						<input
							type="password"
							className="login_right_input"
							placeholder="Mật khẩu"
						/>
					</div>
					<div className="login_right_button">
						<p className="login_right_button_p">Đăng nhập</p>
					</div>
				</div>
				<div className="login_footer">
					<p className="login_footer_p">@SangHuynh</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
