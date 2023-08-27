
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Drawer } from "antd";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer"

const { Header: AntHeader, Content, Sider } = Layout;
const Main = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState("right");
    const [sidenavColor, setSidenavColor] = useState("#1890ff");
    const [sidenavType, setSidenavType] = useState("transparent");
    const [fixed, setFixed] = useState(false);

    const openDrawer = () => setVisible(!visible);
    const handleSidenavType = (type) => setSidenavType(type);
    const handleSidenavColor = (color) => setSidenavColor(color);
    const handleFixedNavbar = (type) => setFixed(type);

    let { pathname } = useLocation();
    pathname = pathname.replace("/", "");

    useEffect(() => {
        if (pathname === "rtl") {
            setPlacement("left");
        } else {
            setPlacement("right");
        }
    }, [pathname]);

    return (
        <Layout className={`layout-dashboard`} >
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                trigger={null}
                width={250}
                theme="light"
                className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
                    }`}
                style={{ background: sidenavType }}
            >
                <SideNav color={sidenavColor} />
            </Sider>
            <Layout>
                <AntHeader>
                    <Header
                        onPress={openDrawer}
                        name={pathname}
                        subName={pathname}
                        handleSidenavColor={handleSidenavColor}
                        handleSidenavType={handleSidenavType}
                        handleFixedNavbar={handleFixedNavbar}
                    />
                </AntHeader>
                <Content className="content-ant">
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default Main;
