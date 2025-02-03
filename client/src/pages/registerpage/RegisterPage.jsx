import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
export default function RegisterPage() {
    const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
		isAdmin: false,
	});

	const handleSignup = async () => {
		try {
			const res = await fetch("http://localhost:9000/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.error) {
				alert(`Error: ${data.error}`);
				return;
			}
            alert('regsiter')
            navigate('/login')
            console.log(data)

			localStorage.setItem("user-threads", JSON.stringify(data));
			// Handle user state management here
		} catch (error) {
			alert(`Error: ${error.message}`);
		}
	};

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
			<div style={{ maxWidth: "600px", width: "100%", padding: "20px" }}>
				<div style={{ textAlign: "center", marginBottom: "30px" }}>
					<h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Sign up</h1>
				</div>

				<div style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", padding: "20px" }}>
					<div style={{ marginBottom: "20px" }}>
						<label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
							Username
							<input
								type="text"
								style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
								onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
								value={inputs.username}
							/>
						</label>
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
							Email address
							<input
								type="email"
								style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
								onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
								value={inputs.email}
							/>
						</label>
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
							Password
							<div style={{ position: "relative" }}>
								<input
									type={showPassword ? "text" : "password"}
									style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
									value={inputs.password}
								/>
								<button
									style={{ 
										position: "absolute", 
										right: "10px", 
										top: "50%", 
										transform: "translateY(-50%)", 
										background: "none", 
										border: "none",
										cursor: "pointer"
									}}
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? "👀" : "🕶️"}
								</button>
							</div>
						</label>
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<input
								type="checkbox"
								checked={inputs.isAdmin}
								onChange={(e) => setInputs({ ...inputs, isAdmin: e.target.checked })}
							/>
							<span>Register as admin</span>
						</label>
					</div>

					<button
						style={{
							width: "100%",
							padding: "12px",
							backgroundColor: "#4a5568",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
							fontWeight: "bold",
						}}
						onClick={handleSignup}
					>
						Sign up
					</button>

					<div style={{ textAlign: "center", marginTop: "20px" }}>
						<p>
							Already a user?{" "}
							<button 
								style={{ color: "#4299e1", background: "none", border: "none", cursor: "pointer" }}
								onClick={() => {/* Add your login screen switch logic here */}}
							>
								Login
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}