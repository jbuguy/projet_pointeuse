import DisplayUser from "./DisplayUser";
import MenuItem from "./MenuItem";
import {
    Home,
    Users,
    Calendar,
    Network,
    BarChart3,
    Monitor,
    Settings,
    User,
    Clock,
} from "lucide-react";
export default function Menu({ user }) {

    return (
        <div className="mainMenu">
            <div className="top">
                <DisplayUser user={user} />
                <hr />
                <menu>
                    <MenuItem icon={Home} text="Acceuil" link="/" />
                    <MenuItem icon={Users} text="Employés" link="/employe" />
                    <MenuItem
                        icon={Network}
                        text="Hiérachie"
                        link="hierachie"
                    />
                    <MenuItem
                        icon={Calendar}
                        text="Programme"
                        link="programme"
                    />
                    <MenuItem
                        icon={BarChart3}
                        text="Statistiques"
                        link="stat"
                    />
                    <MenuItem icon={Monitor} text="Machine" link="machine" />
                    <MenuItem
                        icon={Clock}
                        text="Suivi d'heures"
                        link="/suivi_heure"
                    />
                </menu>
            </div>
            <div className="bottom">
                <hr />
                <menu>
                    <MenuItem
                        icon={Settings}
                        text="Parameters"
                        link="parameter"
                    />
                    <MenuItem
                        icon={User}
                        text="Utilisateur"
                        link="utilisateur"
                    />
                </menu>
            </div>
        </div>
    );
}
