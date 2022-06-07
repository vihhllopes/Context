import React, {useState} from "react";
import "../../style.css";
import logo from "../Curriculo/logo.png";
import { Layout, Menu, Breadcrumb } from 'antd';
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TodoProvider from "../../contexts/TodoContex";
const { Header, Content, Footer } = Layout;

const  Curriculo = () =>{
 
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
            <h2 className="name">Helena Pereira</h2>
            <p className="infor">Sou graduada em Administração e estou em busca de novas oportunidades na área de Gestão de Loja. Tenho mais de 10 anos de experiência em vendas e liderança de equipes.</p>
        </div>
        <br/>
        <hr/>
        <br/>
        <div>
            <h3 className="container-Objet">Objetivo</h3>
            <p className="option">Gerente de Loja</p>
        </div>
        <div >
            <h3 className="container-Objet">Experiência profissional</h3>
            <div className="option">
            <h4>Líder de loja</h4>
            <p>Borcelle Modas | 2019 - Aos dias atuais Gestão de equipe</p>
            <p>Assistência à gestão de frente de loja</p> 
            <p>Líder de fechamento de caixa e estoque.</p>
            </div>
          

            <div className="option">
                <h4>Vendedora líder</h4>
            <p >Loja Monte Verde  | 2017 - 2019</p>
            <p >Líder da equipe de venda, assistente de gestão de estoque e vitrine.</p> 
    </div>
            <h3 className="container-Objet">Formação Academica</h3>
            <div className="option">
                <h4>Administração</h4>
                <p>Universidade Fasutino | 2019 - 2022</p>
            </div>
            <h3 className="container-Objet">Habilidades</h3>
            <div className="option">
             <TodoProvider>
      <TodoList></TodoList>
      <br/>
      <hr/>
      <br/>

      <AddTodo></AddTodo>
  </TodoProvider>
            </div>
        </div>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      (12) 3456-7890 | ola@grandesite.com.br | Rua Alegre, 123 - Cidade Brasileira 
    </Footer>
  </Layout>
);


};
export default Curriculo;