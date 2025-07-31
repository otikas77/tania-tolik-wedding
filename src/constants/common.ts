export const BLOCKS_ID = {
    heroSection: "heroSection",
    invitationSection: 'invitationSection',
    planSection: 'planSection',
    detailsSection: "detailsSection",
    colorsSection: 'colorsSection',
    presentsSection: 'presentsSection'
} as const;


export const LINKS = {
    [BLOCKS_ID.detailsSection]: 'Деталі',
    [BLOCKS_ID.planSection]: "План",
    [BLOCKS_ID.colorsSection]: 'Кольорова гамма',
    [BLOCKS_ID.presentsSection]: "Подарунки"
} as const;

