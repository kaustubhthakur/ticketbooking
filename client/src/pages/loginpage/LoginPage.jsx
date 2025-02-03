import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
export default function LoginPage() {
    const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const handleLogin = async () => {
		setLoading(true);
		try {
			const res = await fetch("http://localhost:9000/auth/login", {
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
			
			localStorage.setItem("users", JSON.stringify(data));
			alert(`logged in ${inputs.username}`)
            navigate('/');
		} catch (error) {
			alert(`Error: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
			<div style={{ maxWidth: "600px", width: "100%", padding: "20px" }}>
				<div style={{ textAlign: "center", marginBottom: "30px" }}>
					<h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Login</h1>
				</div>

				<div style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", padding: "20px" }}>
					<div style={{ marginBottom: "20px" }}>
						<label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
							Username
							<input
								type="text"
								style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
								value={inputs.username}
								onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
									value={inputs.password}
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
							opacity: loading ? 0.7 : 1,
						}}
						onClick={handleLogin}
						disabled={loading}
					>
						{loading ? "Logging in..." : "Login"}
					</button>

					<div style={{ textAlign: "center", marginTop: "20px" }}>
						<p>
							Don't have an account?{" "}
							<button 
								style={{ color: "#4299e1", background: "none", border: "none", cursor: "pointer" }}
								onClick={() => {/* Add your signup screen switch logic here */}}
							>
								Sign up
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}