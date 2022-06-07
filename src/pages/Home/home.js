import React from "react";
import logo from "../Curriculo/logo.png";
import "../../style.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb , Button} from 'antd';
const { Header, Content, Footer } = Layout;


function Home(){
    return(
<Layout>
    <Header
      style={{
        position: 'fixed',
        width: '100%',
      }}
    >
      <div 
     >
          <img className="logo"  src={logo} />
         </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
            {
              key: '1',
            
              label: 'Home',
            },
            {
              key: '2',
        
              label: 'Modelos',
            },
            {
              key: '3',
            
              label: 'Perfil',
            },
          ]}
      />
    </Header>
     <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Seu Curriculo</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <div className="container">
            <h2 className="welcome">Bom ver você novamente, Helena Pereira!</h2>
          <Link to="/Curriculo">
     <Button type="primary">
         Acesse seu Curriculo aqui!!
     </Button>
 </Link>
        </div>
      </div>
    </Content>
    </Layout>
    
    )
};
export default Home;