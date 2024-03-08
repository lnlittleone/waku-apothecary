export type Plant = {
    id: string,
    common_name: string,
    scientific_name: string,
    family: string,
    description: string,
    height: string,
    leaves: Leaves,
    flowers: Flowers,
    habitat: string,
    uses: string,
    advantages: string[],
    disadvantages: string[],
    cultivation_tips: CultivationTips,
    photos: string[],
    conservation_status: string
}

export type Leaves = {
    description: string,
    color: string
}

export type Flowers = {
    description: string
    blooming_period: string
}

export type CultivationTips = {
    soil: string,
    exposure: string,
    watering: string,
    maintenance: string
}