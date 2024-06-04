import { TeamMember } from '@/constants/teamMembers';
import styles from '../AboutUs.module.scss';


interface TeamSectionProps {
    title: string;
    description: string;
    members: TeamMember[];
}


export function TeamSection({ title, description, members }: TeamSectionProps) {
    return (
        <section className={styles.teamSection}>
            <div className={styles.teamContent}>
                <h2 className={styles.teamTitle}>{title}</h2>
                <p className={styles.teamDescription}>{description}</p>
                <ul className={styles.teamMembers}>
                    {members.map((member, index) => (
                        <li key={`TeamSection__${index}_${member.bio}`} className={styles.teamMember}>
                            <h3 className={styles.teamMemberName}>{member.name}</h3>
                            <p className={styles.teamMemberRole}>{member.role}</p>
                            <p className={styles.teamMemberBio}>{member.bio}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
