import React from "react";

type LoginClassFormState = {
  email: string;
  password: string;
};

class LoginClassForm extends React.Component<{}, LoginClassFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<LoginClassFormState, keyof LoginClassFormState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={this.handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginClassForm;
