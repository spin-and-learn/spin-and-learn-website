import { Layout, Row, Col } from "antd";

const Footer = () => {
    const { Footer: AntFooter } = Layout;

    return (
        <AntFooter style={{ background: "#fafafa", paddingRight: 40 }}>
            <Row className="just">
                <Col xs={24} md={12} lg={12}>
                    <div className="copyright">© 2021 Spin And Learn</div>
                </Col>
            </Row>
        </AntFooter>
    );
}

export default Footer;
