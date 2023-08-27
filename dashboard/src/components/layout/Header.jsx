import { useEffect } from "react"
import { Row, Col, Breadcrumb, Card } from "antd"
import { NavLink, Link, useLocation } from "react-router-dom"

const Header = () => {
    const { pathname } = useLocation()

    useEffect(() => window.scrollTo(0, 0))

    return (
        <div className="Header">
            <Row gutter={[24, 0]}>
                <Col span={24} md={6}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/">Pages</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
                            {pathname === "/" ? "Dashboard" : pathname.replace("/", "")}
                        </Breadcrumb.Item>

                    </Breadcrumb>
                    <div className="ant-page-header-heading">
                        <span
                            className="ant-page-header-heading-title"
                            style={{ textTransform: "capitalize" }}
                        >
                            {pathname === "/" ? "Dashboard" : pathname.replace("/", "")}
                        </span>
                    </div>
                </Col>
                <Col span={24} md={18} className="header-control">
                    <a href="/" className="btn-sign-in active">
                        {/* {profile} */}
                        <div className="d-flex">
                            <Card bodyStyle={{ height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ color: "#8c8c8c", fontSize: 22 }} className="material-symbols-outlined">logout</span>
                                <span style={{ color: "#8c8c8c" }} className="ms-1">Log Out</span>
                            </Card>
                        </div>
                    </a>

                </Col>
            </Row>
        </div>
    )
}

export default Header
