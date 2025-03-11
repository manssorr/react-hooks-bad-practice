import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useBadUserManager} from "@/hooks/useBadUserManager";

export const LoginForm = () => {
	const [firstName, setFirstName] = useState("Test");
	const [lastName, setLastName] = useState("User");
	const {loginUser} = useBadUserManager();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		if (firstName && lastName) {
			loginUser(firstName, lastName);
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleLogin} className="space-y-4">
					<Input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
					/>
					<Input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
					/>
					<Button type="submit" className="w-full">
						Login
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
