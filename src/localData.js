export const localData = {
    users: [
        { user_id: "u1", user_name: "ABC", totalPoints: 0},
        { user_id: "u2", user_name: "XYZ", totalPoints: 0 }
    ],
    appointment_types: [
        { id: "at1", name: "Therapist Session", points: 25 },
        { id: "at2", name: "Daily Dosing", points: 15 },
    ],
    appointments: [
        { id: "a1", type: "at1", user_id: "u1", date_time: "1603175400000", pointsEarned: true},
        { id: "a2", type: "at2", user_id: "u1", date_time: "1603182600000", pointsEarned: false},
        { id: "a3", type: "at2", user_id: "u1", date_time: "1603269000000", pointsEarned: false},
        { id: "a4", type: "at1", user_id: "u1", date_time: "1603272600000", pointsEarned: false},
        { id: "a5", type: "at2", user_id: "u2", date_time: "1603175400000", pointsEarned: false},
        { id: "a6", type: "at1", user_id: "u2", date_time: "1603182600000", pointsEarned: false},
        { id: "a7", type: "at1", user_id: "u2", date_time: "1603269000000", pointsEarned: false},
        { id: "a8", type: "at2", user_id: "u2", date_time: "1603272600000", pointsEarned: false},
    ]
}

