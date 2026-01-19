import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUser, loginUser } from "../store/reducers/userSlice";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, isAuthenticated, user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkUser());
    if (isAuthenticated) {

      if (user.isAdmin) {
        navigate("/admin");
      }
      else {
        navigate("/");
      }
    }
  }, [dispatch, isAuthenticated, user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  if (loading) {
    return <div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
      <img src="/loading.gif" alt="loading" className='w-32 h-32' />
    </div>
  }

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-500 mt-1">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md text-white font-semibold transition-colors ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-4 text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-full h-[600px]">
        <img src="/brandlogo.png" className='w-[300px] h-[300px] object-contain' />
      </div>
    </div>
  );
};

export default LoginPage;
