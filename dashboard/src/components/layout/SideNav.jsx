import { Menu, Card } from "antd"
import { useLocation } from "react-router-dom"
import logo from "../../assets/images/logo.png"

const SideNav = ({ color }) => {
    const { pathname } = useLocation()
    const mainPages = [
        {
            name: "Dashboard",
            path: "/",
            icon: "grid_view"
        },
        {
            name: "Students",
            path: "/students",
            icon: "person"
        },
        {
            name: "Forms",
            path: "/forms",
            icon: "grid_view"
        }

    ]
    const HRPages = [
        {
            name: "Employees",
            path: "/employees",
            icon: "badge"
        },
        {
            name: "Payroll",
            path: "/payroll",
            icon: "payments"
        }

    ]

    const handleMenuItemColor = ({ key, item }) => {
        if (pathname === item.path) {
            return {
                bg: color,
                color: "white"
            }
        }
        else if (pathname.includes("/students/") && item.path === "/students") {
            return {
                bg: color,
                color: "white"
            }
        }
        else if (pathname.includes("/employee/") && item.path === "/employees") {
            return {
                bg: color,
                color: "white"
            }
        }
        else {
            return {
                bg: "",
                color: "#8c8c8c"
            }
        }
    }

    const MenuItem = ({ key, item }) => {
        if (pathname === item.path || (pathname.includes("/employee/") && item.path === "/employees") || (pathname.includes("/students/") && item.path === "/students")) {
            return (
                <Menu.Item key={key}>
                    <a href={item.path} style={{ padding: 0 }}>
                        <Card bordered={true} bodyStyle={{ height: 50, width: 200, display: "flex", alignItems: "center" }}>
                            <span className="icon"
                                style={{
                                    background: handleMenuItemColor({ key, item }).bg // cheked
                                }}
                            >
                                <span style={{
                                    color: handleMenuItemColor({ key, item }).color
                                }}
                                    className="material-symbols-outlined p-3">{item.icon}</span>
                            </span>
                            <b className="label">{item.name}</b>
                        </Card>
                    </a>
                </Menu.Item>
            )
        }

        return (
            <Menu.Item key={key}>
                <a href={item.path} style={{}}>
                    <span className="icon"
                        style={{
                            background: handleMenuItemColor({ key, item }).bg
                        }}
                    >
                        <span style={{ color: handleMenuItemColor({ key, item }).color }} className="material-symbols-outlined p-3">{item.icon}</span>
                    </span>
                    <span style={{ color: "black" }} className="label">{item.name}</span>
                </a>
            </Menu.Item>
        )
    }

    return (
        <div className="SideNav" >
            <div className="brand ps-2">
                <img src={logo} alt="logo" />
                <span style={{ fontWeight: "bold", fontSize: 16 }}>Spin And Learn</span>
            </div>
            <hr />
            <Menu theme="light" mode="inline">
                <Menu.Item className="menu-item-header" key="Main-pages">
                    Main
                </Menu.Item>

                {mainPages.map((item, key) => (
                    <MenuItem key={key + 100} item={item} />
                ))}

                <Menu.Item className="menu-item-header" key="HR-pages">
                    HR
                </Menu.Item>
                {HRPages.map((item, key) => (
                    <MenuItem key={key + 100} item={item} />
                ))}
            </Menu>
        </div>
    )
}

export default SideNav
