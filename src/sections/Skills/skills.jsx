import styles from './skillsstykes.module.css'
import CheckmarkIcon from "../../assets/checkmark-dark.svg"
import Skilllist from '../../Common/Skilllist'
function Skills() {
  return (
    <section id = "skills" className={styles.container}>
        <h1 className='sectiontitle'>Skills</h1>
        <div className={styles.Skilllist}>
           <Skilllist src = {CheckmarkIcon} skill = 'C++' />
           <Skilllist src = {CheckmarkIcon} skill = 'Java'/>
            </div>
            <hr/>
            <div className={styles.Skilllist}>
            <Skilllist src = {CheckmarkIcon} skill = 'HTML'/>
            <Skilllist src = {CheckmarkIcon} skill = 'CSS'/>
            <Skilllist src = {CheckmarkIcon} skill = 'JAVASCRIPT'/>
            <Skilllist src = {CheckmarkIcon} skill = 'REACT JS'/>
            <Skilllist src = {CheckmarkIcon} skill = 'BOOTSTRAP'/>
            <Skilllist src = {CheckmarkIcon} skill = 'TAILWIND CSS'/>
            </div>
            <hr/>
            <div className={styles.Skilllist}>
            
            <Skilllist src = {CheckmarkIcon} skill = 'MYSQL'/>
            <Skilllist src = {CheckmarkIcon} skill = 'OOPS (OBJECT ORIENTED PROGRAMMING)'/>
            </div>
            
        
    </section>
  )
}

export default Skills;