import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUser, registerUser } from "../store/reducers/userSlice";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, isAuthenticated, user, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(checkUser());
    if (isAuthenticated) {

      if (user.isAdmin) {
        navigate("/admin");
      }
      else {
        navigate("/products");
      }
    }
  }, [dispatch, isAuthenticated, user, navigate])


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-500 mt-1">Get started with your free account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-16"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md text-white font-semibold transition-colors cursor-pointer ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Redirect to Login */}
          <p className="text-center text-gray-600 mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center w-190 h-[600px]">
          <img src="/brandlogo.png" className='w-130 h-40' />
        </div>
      </div>

    </div>
  );
};

export default RegisterPage;
