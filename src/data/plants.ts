import {Plant} from "~/types/Plant.js";

export const plants: Plant[] = [
    {
        "id": "lavandula-angustifolia-001",
        "common_name": "Lavande",
        "scientific_name": "Lavandula angustifolia",
        "family": "Lamiaceae",
        "description": "La lavande est une plante vivace connue pour ses fleurs parfumées, qui sont utilisées en parfumerie, en aromathérapie et dans la fabrication de savons. Elle possède des feuilles étroites et des fleurs violettes qui poussent en épis.",
        "height": "30 à 60 cm",
        "leaves": {
            "description": "Feuilles étroites, vert grisâtre, linéaires à oblongues, souvent enroulées sur les bords.",
            "color": "Vert grisâtre"
        },
        "flowers": {
            "description": "Fleurs violettes, parfumées, regroupées en épis terminaux.",
            "blooming_period": "Juin à août"
        },
        "habitat": "Originaire du bassin méditerranéen, la lavande préfère les sols secs et ensoleillés.",
        "uses": "Utilisée pour ses propriétés relaxantes et antiseptiques. Elle est également appréciée en cuisine pour aromatiser les plats.",
        "advantages": [
            "Facile à cultiver en sol bien drainé",
            "Propriétés relaxantes et antiseptiques",
            "Attire les pollinisateurs comme les abeilles et les papillons"
        ],
        "disadvantages": [
            "Sensible à l'humidité excessive et à la pourriture racinaire",
            "Peut devenir envahissante si les conditions lui sont favorables"
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, calcaire, pH neutre à alcalin.",
            "exposure": "Plein soleil.",
            "watering": "Modéré à faible, la lavande tolère la sécheresse.",
            "maintenance": "Tailler légèrement après la floraison pour favoriser une nouvelle croissance et maintenir la forme."
        },
        "photos": [
            "lien_vers_photo1.jpg",
            "lien_vers_photo2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "camomille-001",
        "common_name": "Camomille",
        "scientific_name": "Matricaria chamomilla / Chamaemelum nobile",
        "family": "Asteraceae",
        "description": "La camomille est une plante herbacée annuelle ou vivace connue pour ses petites fleurs blanches et jaunes ressemblant à des marguerites. Elle est largement utilisée pour ses propriétés médicinales, notamment pour ses effets calmants et anti-inflammatoires.",
        "height": "15 à 60 cm pour Matricaria chamomilla, jusqu'à 30 cm pour Chamaemelum nobile",
        "leaves": {
            "description": "Feuilles fines et divisées, d'un vert profond.",
            "color": "Vert profond"
        },
        "flowers": {
            "description": "Petites fleurs avec des pétales blancs rayonnants autour d'un centre jaune. Les fleurs de Matricaria chamomilla sont généralement plus grandes.",
            "blooming_period": "Mai à septembre"
        },
        "habitat": "Préfère les sols secs et sablonneux. Matricaria chamomilla est souvent trouvée dans les champs et les zones perturbées, tandis que Chamaemelum nobile préfère les prairies et les jardins.",
        "uses": "Utilisée en tisane pour ses effets calmants, dans le traitement des troubles digestifs, et comme anti-inflammatoire. Également utilisée en cosmétique.",
        "advantages": [
            "Facile à cultiver et à entretenir.",
            "Propriétés médicinales reconnues."
        ],
        "disadvantages": [
            "Peut devenir envahissante si les conditions lui sont favorables.",
            "Sensible à certains parasites et maladies."
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, léger, plutôt sablonneux.",
            "exposure": "Plein soleil à mi-ombre.",
            "watering": "Modéré. Tolère bien la sécheresse une fois établie.",
            "maintenance": "Peu d'entretien nécessaire. Peut nécessiter un éclaircissage pour éviter la surpopulation."
        },
        "photos": [
            "lien_vers_photo_camomille1.jpg",
            "lien_vers_photo_camomille2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "menthe-001",
        "common_name": "Menthe",
        "scientific_name": "Mentha spicata",
        "family": "Lamiaceae",
        "description": "La menthe est une plante vivace aromatique reconnue pour ses feuilles vertes parfumées. Elle est largement utilisée en cuisine, en médecine traditionnelle et comme plante ornementale.",
        "height": "30 à 60 cm",
        "leaves": {
            "description": "Feuilles ovales, pointues, d'un vert vif, avec des bords dentelés. Elles dégagent un parfum frais caractéristique lorsqu'elles sont froissées.",
            "color": "Vert vif"
        },
        "flowers": {
            "description": "Petites fleurs roses ou blanches regroupées en épis fins.",
            "blooming_period": "Juillet à septembre"
        },
        "habitat": "Adaptable à de nombreux environnements, mais préfère les sols humides et bien drainés, à l'ombre partielle ou en plein soleil.",
        "uses": "Utilisée pour aromatiser plats, boissons, produits de soin et en tisanes pour ses propriétés digestives et apaisantes.",
        "advantages": [
            "Facile à cultiver et peut être récoltée tout au long de l'été.",
            "Propriétés aromatiques et médicinales."
        ],
        "disadvantages": [
            "Peut devenir envahissante en raison de sa croissance rapide par rhizomes.",
            "Nécessite un contrôle régulier pour éviter la surpopulation."
        ],
        "cultivation_tips": {
            "soil": "Sol riche, humide et bien drainé.",
            "exposure": "Plein soleil à mi-ombre.",
            "watering": "Arrosage régulier pour maintenir le sol légèrement humide.",
            "maintenance": "Tailler pour encourager une croissance touffue et empêcher l'envahissement."
        },
        "photos": [
            "lien_vers_photo_menthe1.jpg",
            "lien_vers_photo_menthe2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "aloe-vera-001",
        "common_name": "Aloe Vera",
        "scientific_name": "Aloe vera",
        "family": "Asphodelaceae",
        "description": "L'Aloe Vera est une plante succulente pérenne connue pour ses propriétés médicinales. Ses feuilles épaisses et charnues contiennent un gel clair utilisé en cosmétique et en médecine traditionnelle.",
        "height": "60 à 100 cm",
        "leaves": {
            "description": "Feuilles vertes, épaisses, charnues, avec des bords dentés.",
            "color": "Vert"
        },
        "flowers": {
            "description": "Fleurs jaunes ou oranges, en forme de tube, regroupées sur une hampe florale élevée.",
            "blooming_period": "En été, dans des conditions climatiques adéquates."
        },
        "habitat": "Originaire des régions arides d'Afrique, l'Aloe Vera est cultivé dans les climats tropicaux et subtropicaux du monde entier.",
        "uses": "Le gel d'Aloe Vera est utilisé pour traiter les brûlures, les coupures, les éruptions cutanées et comme hydratant naturel.",
        "advantages": [
            "Facile à cultiver en intérieur et en extérieur dans les climats chauds.",
            "Propriétés thérapeutiques et cosmétiques avérées."
        ],
        "disadvantages": [
            "Sensible au gel et à l'excès d'eau, qui peut provoquer la pourriture des racines."
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, sableux ou rocailleux.",
            "exposure": "Plein soleil à lumière indirecte en intérieur.",
            "watering": "Arrosage modéré, laisser le sol sécher entre les arrosages.",
            "maintenance": "Peu d'entretien requis. Protéger du gel et éviter l'excès d'humidité."
        },
        "photos": [
            "lien_vers_photo_aloevera1.jpg",
            "lien_vers_photo_aloevera2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "souci-officinal-001",
        "common_name": "Souci officinal",
        "scientific_name": "Calendula officinalis",
        "family": "Asteraceae",
        "description": "Plante annuelle connue pour ses fleurs jaunes ou orange vif. Utilisée en phytothérapie, cosmétique et comme colorant naturel dans l'alimentation.",
        "height": "30 à 70 cm",
        "leaves": {
            "description": "Feuilles oblongues, vert moyen, légèrement poilues.",
            "color": "Vert moyen"
        },
        "flowers": {
            "description": "Fleurs jaunes ou orange, en forme de capitule, qui s'ouvrent avec le soleil.",
            "blooming_period": "De mai à octobre"
        },
        "habitat": "Originaire d'Europe du Sud, il s'est naturalisé dans de nombreuses régions tempérées.",
        "uses": "Les fleurs sont utilisées pour leurs propriétés anti-inflammatoires, cicatrisantes et antiseptiques.",
        "advantages": [
            "Facile à cultiver et à récolter.",
            "Attrayant pour les pollinisateurs."
        ],
        "disadvantages": [
            "Peut être sujet aux attaques de pucerons."
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, fertile.",
            "exposure": "Plein soleil.",
            "watering": "Arrosage régulier mais sans excès, tolère la sécheresse.",
            "maintenance": "Supprimer les fleurs fanées pour prolonger la floraison."
        },
        "photos": [
            "lien_vers_photo_souciofficinal1.jpg",
            "lien_vers_photo_souciofficinal2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "echinacee-pourpre-001",
        "common_name": "Échinacée pourpre",
        "scientific_name": "Echinacea purpurea",
        "family": "Asteraceae",
        "description": "Plante vivace connue pour ses grandes fleurs pourpres et son utilisation en médecine traditionnelle pour renforcer le système immunitaire.",
        "height": "60 à 120 cm",
        "leaves": {
            "description": "Feuilles larges, ovales, d'un vert foncé.",
            "color": "Vert foncé"
        },
        "flowers": {
            "description": "Fleurs avec des pétales pourpres retombants et un cône central brun ou pourpre.",
            "blooming_period": "Juillet à septembre"
        },
        "habitat": "Originaire d'Amérique du Nord, elle pousse dans les prairies sèches et les zones ouvertes.",
        "uses": "Utilisée pour stimuler le système immunitaire et prévenir les infections.",
        "advantages": [
            "Résistante aux maladies et aux parasites.",
            "Attire les papillons et autres pollinisateurs."
        ],
        "disadvantages": [
            "Peut nécessiter un soutien pour éviter que les tiges ne se plient."
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, fertile.",
            "exposure": "Plein soleil à mi-ombre.",
            "watering": "Résiste à la sécheresse, arroser modérément.",
            "maintenance": "Diviser les touffes tous les 3-4 ans pour stimuler la croissance."
        },
        "photos": [
            "lien_vers_photo_echinaceepourpre1.jpg",
            "lien_vers_photo_echinaceepourpre2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "sauge-officinale-001",
        "common_name": "Sauge officinale",
        "scientific_name": "Salvia officinalis",
        "family": "Lamiaceae",
        "description": "Plante vivace aromatique avec des feuilles gris-vert et des fleurs bleu-violet. Utilisée en cuisine et en phytothérapie pour ses propriétés antiseptiques et digestives.",
        "height": "30 à 60 cm",
        "leaves": {
            "description": "Feuilles ovales, rugueuses, légèrement duveteuses, avec une teinte gris-vert.",
            "color": "Gris-vert"
        },
        "flowers": {
            "description": "Fleurs bleu-violet, regroupées en épis.",
            "blooming_period": "Mai à juillet"
        },
        "habitat": "Originaire du bassin méditerranéen, elle est largement cultivée dans les jardins et les potagers.",
        "uses": "Feuilles utilisées pour aromatiser les plats, en infusion pour leurs vertus digestives et antiseptiques.",
        "advantages": [
            "Facile à cultiver et nécessite peu d'entretien.",
            "Résistante à la sécheresse."
        ],
        "disadvantages": [
            "Sensible à l'humidité excessive et aux maladies fongiques."
        ],
        "cultivation_tips": {
            "soil": "Sol léger, bien drainé, calcaire.",
            "exposure": "Plein soleil.",
            "watering": "Arrosage modéré, la plante tolère bien la sécheresse.",
            "maintenance": "Tailler après la floraison pour encourager une nouvelle croissance."
        },
        "photos": [
            "lien_vers_photo_saugeofficinale1.jpg",
            "lien_vers_photo_saugeofficinale2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "millepertuis-001",
        "common_name": "Millepertuis",
        "scientific_name": "Hypericum perforatum",
        "family": "Hypericaceae",
        "description": "Plante vivace connue pour ses fleurs jaunes et ses propriétés médicinales, notamment comme antidépresseur naturel.",
        "height": "30 à 90 cm",
        "leaves": {
            "description": "Feuilles petites, ovales, avec de petites glandes transparentes ressemblant à des perforations.",
            "color": "Vert"
        },
        "flowers": {
            "description": "Fleurs jaunes, avec cinq pétales, souvent marquées de petites taches noires.",
            "blooming_period": "Juin à août"
        },
        "habitat": "Prés, lisières de forêts, terrains vagues. Tolère une grande variété de conditions mais préfère les sols bien drainés et les zones ensoleillées.",
        "uses": "Extrait utilisé pour traiter la dépression légère à modérée, les troubles du sommeil et certains troubles cutanés.",
        "advantages": [
            "Facile à cultiver.",
            "Propriétés médicinales reconnues."
        ],
        "disadvantages": [
            "Peut interagir avec de nombreux médicaments.",
            "Considéré comme envahissant dans certaines régions."
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, même pauvre.",
            "exposure": "Plein soleil.",
            "watering": "Tolère bien la sécheresse, arrosage modéré nécessaire.",
            "maintenance": "Peu d'entretien nécessaire. Éviter les sols trop humides."
        },
        "photos": [
            "lien_vers_photo_millepertuis1.jpg",
            "lien_vers_photo_millepertuis2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "melisse-001",
        "common_name": "Mélisse",
        "scientific_name": "Melissa officinalis",
        "family": "Lamiaceae",
        "description": "Plante vivace aromatique, utilisée pour ses feuilles au parfum citronné. Appréciée en phytothérapie pour ses propriétés apaisantes et digestives.",
        "height": "50 à 80 cm",
        "leaves": {
            "description": "Feuilles vert foncé, ovales, dentées, avec un parfum citronné lorsqu'elles sont froissées.",
            "color": "Vert foncé"
        },
        "flowers": {
            "description": "Petites fleurs blanches ou légèrement rosées, regroupées en verticilles.",
            "blooming_period": "Juin à septembre"
        },
        "habitat": "Originaire d'Europe du Sud et de la région méditerranéenne, cultivée dans les jardins et utilisée comme plante médicinale.",
        "uses": "Infusions pour soulager l'anxiété, l'insomnie, les troubles digestifs. Utilisée également en cuisine pour aromatiser plats et boissons.",
        "advantages": [
            "Facile à cultiver.",
            "Propriétés calmantes et digestives."
        ],
        "disadvantages": [
            "Peut devenir envahissante.",
            "Attire les abeilles et les insectes."
        ],
        "cultivation_tips": {
            "soil": "Sol riche, frais et bien drainé.",
            "exposure": "Soleil à mi-ombre.",
            "watering": "Maintenir le sol humide, surtout durant les périodes sèches.",
            "maintenance": "Tailler après la floraison pour encourager une croissance compacte."
        },
        "photos": [
            "lien_vers_photo_melisse1.jpg",
            "lien_vers_photo_melisse2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "ginkgo-001",
        "common_name": "Ginkgo",
        "scientific_name": "Ginkgo biloba",
        "family": "Ginkgoaceae",
        "description": "Arbre caducifolié, l'un des plus anciens types d'arbres existants. Reconnu pour sa résistance et ses feuilles en forme d'éventail uniques.",
        "height": "Jusqu'à 30 mètres ou plus",
        "leaves": {
            "description": "Feuilles en forme d'éventail, vert clair, se colorant en jaune vif à l'automne.",
            "color": "Vert clair"
        },
        "flowers": {
            "description": "L'arbre est dioïque, avec des fleurs mâles et femelles sur des individus séparés. Les fleurs sont peu remarquables.",
            "blooming_period": "Printemps"
        },
        "habitat": "Originaire de Chine, largement planté dans les villes et les jardins du monde entier pour son aspect ornemental et sa tolérance à la pollution.",
        "uses": "Les feuilles sont utilisées en phytothérapie pour améliorer la mémoire et la circulation sanguine.",
        "advantages": [
            "Très résistant à la pollution et aux maladies.",
            "Longue durée de vie."
        ],
        "disadvantages": [
            "Les fruits des arbres femelles dégagent une odeur désagréable lorsqu'ils tombent et pourrissent."
        ],
        "cultivation_tips": {
            "soil": "Adaptable à de nombreux types de sol, préfère un sol bien drainé.",
            "exposure": "Plein soleil.",
            "watering": "Résistant à la sécheresse une fois établi.",
            "maintenance": "Peu d'entretien nécessaire. Prévoir un espace suffisant pour sa croissance."
        },
        "photos": [
            "lien_vers_photo_ginkgo1.jpg",
            "lien_vers_photo_ginkgo2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "valeriane-001",
        "common_name": "Valériane",
        "scientific_name": "Valeriana officinalis",
        "family": "Valerianaceae",
        "description": "Plante herbacée vivace, appréciée pour ses propriétés sédatives et relaxantes. Utilisée pour traiter l'insomnie et l'anxiété.",
        "height": "30 à 150 cm",
        "leaves": {
            "description": "Feuilles composées, vert foncé, avec des folioles dentées.",
            "color": "Vert foncé"
        },
        "flowers": {
            "description": "Petites fleurs roses ou blanches, regroupées en corymbes.",
            "blooming_period": "Mai à juillet"
        },
        "habitat": "Préfère les zones humides et les sols riches en bordure de cours d'eau, dans les prairies et les forêts claires.",
        "uses": "Racine utilisée en infusion ou en extrait pour ses effets calmants.",
        "advantages": [
            "Facile à cultiver.",
            "Propriétés médicinales pour le sommeil et l'anxiété."
        ],
        "disadvantages": [
            "Peut devenir envahissante dans des conditions optimales."
        ],
        "cultivation_tips": {
            "soil": "Sol riche et humide.",
            "exposure": "Soleil à mi-ombre.",
            "watering": "Arrosage régulier pour maintenir le sol constamment humide.",
            "maintenance": "Diviser les touffes tous les 2-3 ans pour revitaliser la plante."
        },
        "photos": [
            "lien_vers_photo_valeriane1.jpg",
            "lien_vers_photo_valeriane2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "romarin-001",
        "common_name": "Romarin",
        "scientific_name": "Rosmarinus officinalis",
        "family": "Lamiaceae",
        "description": "Arbuste persistant aromatique, prisé en cuisine pour ses feuilles parfumées et en phytothérapie pour ses propriétés antioxydantes.",
        "height": "Jusqu'à 2 mètres",
        "leaves": {
            "description": "Feuilles fines, allongées, de couleur vert foncé, avec un revers blanchâtre.",
            "color": "Vert foncé"
        },
        "flowers": {
            "description": "Petites fleurs bleues, roses ou blanches, regroupées le long des branches.",
            "blooming_period": "Printemps, parfois jusqu'en automne"
        },
        "habitat": "Originaire de la région méditerranéenne, il est largement cultivé dans les jardins du monde entier.",
        "uses": "Feuilles utilisées pour aromatiser les plats. Huile essentielle utilisée pour ses vertus thérapeutiques.",
        "advantages": [
            "Résistant à la sécheresse.",
            "Propriétés culinaires et médicinales."
        ],
        "disadvantages": [
            "Sensible au froid et à l'excès d'humidité au niveau des racines."
        ],
        "cultivation_tips": {
            "soil": "Sol bien drainé, léger, même calcaire.",
            "exposure": "Plein soleil.",
            "watering": "Arroser modérément, tolère bien la sécheresse.",
            "maintenance": "Tailler pour stimuler une croissance touffue."
        },
        "photos": [
            "lien_vers_photo_romarin1.jpg",
            "lien_vers_photo_romarin2.jpg"
        ],
        "conservation_status": "Non menacée"
    },
    {
        "id": "curcuma-001",
        "common_name": "Curcuma",
        "scientific_name": "Curcuma longa",
        "family": "Zingiberaceae",
        "description": "Plante vivace rhizomateuse, connue pour son rhizome orange utilisé comme épice et pour ses propriétés médicinales.",
        "height": "60 à 90 cm",
        "leaves": {
            "description": "Grandes feuilles lancéolées, vert brillant, enveloppant le rhizome.",
            "color": "Vert brillant"
        },
        "flowers": {
            "description": "Fleurs jaunes ou blanches, réunies en inflorescence protégée par des bractées colorées.",
            "blooming_period": "Fin de l'été"
        },
        "habitat": "Originaire du Sud de l'Asie, cultivé principalement en Inde et dans les régions tropicales.",
        "uses": "Rhizome utilisé en poudre comme épice (curry) et pour ses propriétés anti-inflammatoires.",
        "advantages": [
            "Riche en composés bénéfiques pour la santé.",
            "Utilisations culinaires et médicinales diverses."
        ],
        "disadvantages": [
            "Nécessite un climat chaud et humide, difficile à cultiver dans les régions tempérées."
        ],
        "cultivation_tips": {
            "soil": "Sol riche, bien drainé.",
            "exposure": "Ombre légère ou soleil filtré.",
            "watering": "Maintenir le sol constamment humide mais non détrempé.",
            "maintenance": "Protéger du gel et des températures froides."
        },
        "photos": [
            "lien_vers_photo_curcuma1.jpg",
            "lien_vers_photo_curcuma2.jpg"
        ],
        "conservation_status": "Non menacée"
    }
]
