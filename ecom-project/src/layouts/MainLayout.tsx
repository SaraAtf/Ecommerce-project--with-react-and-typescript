import { Container } from "react-bootstrap";
import styles from './style.module.css'
import Header from "../components/common/Header";
const {container,wrapper} = styles
export default function MainLayout() {
  return (
    <Container className={container}>
          <div className={wrapper}>
               <Header/>
         </div>
    </Container>
  )
}
