import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Button, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAuth } from "./Account";
import Profile from "./Profile";
import { Link, useLocation } from "react-router-dom";

const AppBarComponent = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // 🔥 check active (support cả detail page)
  const isActive = (path) => location.pathname.startsWith(path);

  // 🎨 style menu
  const menuStyle = (path) => ({
    color: isActive(path) ? "#1976d2" : "#000",
    textTransform: "none",
    fontSize: 16,
    fontWeight: isActive(path) ? "bold" : 500,
    position: "relative",
    mx: 1,

    "&::after": isActive(path)
      ? {
          content: '""',
          position: "absolute",
          bottom: -6,
          left: 0,
          width: "100%",
          height: "3px",
          backgroundColor: "#1976d2",
          borderRadius: "2px",
        }
      : {},

    "&:hover": {
      color: "#1976d2",
    },
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 2,
            }}
          >
            <img
              src="https://res.cloudinary.com/ddmsl3meg/image/upload/v1733899748/cw96zg7py4xsxwdyanzy.png"
              style={{
                height: "50px",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Box>

          <Button component={Link} to="/account/OrderPlane" sx={menuStyle("/account/OrderPlane")}>
            Máy Bay + K.sạn
          </Button>

          <Button component={Link} to="/account/Hotels" sx={menuStyle("/account/Hotels")}>
            Chỗ ở
          </Button>

          <Button sx={menuStyle("/account/activities")}>
            Hoạt động
          </Button>

          <Button sx={menuStyle("/account/deals")}>
            Ưu đãi
          </Button>

          <Button sx={menuStyle("/account/esim")}>
            eSim
          </Button>
        </Box>

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isAuthenticated ? (
            <>
              <Button component={Link} to="/account/shoppingcart">
                <Badge badgeContent={2} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Button>

              <Profile fontSize="30px" />
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/account/login"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: 16,
                }}
              >
                Đăng Nhập
              </Button>

              <Button
                component={Link}
                to="/account/SignUp"
                sx={{
                  ml: 1,
                  textTransform: "none",
                  fontSize: 16,
                  borderRadius: "20px",
                  px: 2,
                  background: "linear-gradient(45deg, #2196F3, #21CBF3)",
                  color: "#fff",
                  "&:hover": {
                    background: "linear-gradient(45deg, #1976d2, #00acc1)",
                  },
                }}
              >
                Đăng Ký
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;