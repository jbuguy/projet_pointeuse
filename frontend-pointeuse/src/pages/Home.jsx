import { MessageSquareX, TextSelect, UserPlus, UserPlus2Icon, UserRoundPlus } from "lucide-react";
import MainItem from "../components/MainItem";
import { useOutletContext } from "react-router";

export default function Home() {
    const items = [
        {
            icon: UserPlus,
            head: "Ajouter un autre admin",
            text: "Ajouter un nouvel administrateur chargé de la gestion des pointeuses. Celui-ci aura les droits nécessaires pour configurer, surveiller et maintenir les dispositifs de pointage.",
        },
        {
            icon: TextSelect,
            head: "Voir les logs",
            text: "visualiser les logs du système pour assurer le suivi des activités.",
        },
        {
            icon: MessageSquareX,
            head: "Correction manuelle",
            text: "consulter  les les pointages en retard détectées pour la journée en cours et appliquer des actions correctives.",
        },
    ];
    const user = useOutletContext();
    return (
        <div>
            <h1 className="hello">
                Bienvenue dans votre tableau de bord, {user.name}
            </h1>
            <h3 className="societe">societe de consultation de tunis</h3>
            <div className="mainContent smaller">
                {items.map((item) => (
                    <MainItem
                        key={item.head}
                        icon={item.icon}
                        head={item.head}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
