
import { supabase } from "../../supabase";

const GoogleLoginButton = () => {

  const handleGoogleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("登入失敗:", error.message);
    } else {
      console.log("Google 登入成功:", user);
    }
  };

  return <button className="btn btn-secondary" onClick={handleGoogleLogin}>使用 Google 登入</button>;
};

export default GoogleLoginButton;