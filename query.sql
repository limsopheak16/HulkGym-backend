INSERT INTO
    branch (name, location, image, company_id)
VALUES
    (
        'Hulk Gym - Toul Kork Branch',
        'Street 289, Toul Kork, Phnom Penh',
        'https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk%20Gym/zixly4y31kqccea7kloq',
        '3bfd488f-4b91-48c9-b312-4004be165cd2'
    ),
    (
        'Hulk Gym - BKK1 Branch',
        'Street 51, Boeung Keng Kang 1, Phnom Penh',
        ' https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk Gym/xpcjlznpi1i5uxo7gmnl',
        '3bfd488f-4b91-48c9-b312-4004be165cd2'
    ),
    (
        'Hulk Gym - Chbar Ampov Branch',
        'National Road 1, Chbar Ampov, Phnom Penh',
        'https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk%20Gym/xpcjlznpi1i5uxo7gmnl',
        '3bfd488f-4b91-48c9-b312-4004be165cd2'
    ),
    (
        'Hulk Gym - Sen Sok Branch',
        'Street 2004, Sen Sok, Phnom Penh',
        'https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk%20Gym/g8f8vaczpj1xe2vnjnhz',
        '3bfd488f-4b91-48c9-b312-4004be165cd2'
    ),
    (
        'Hulk Gym - Russian Market Branch',
        'Street 450, Toul Tom Poung, Phnom Penh',
        'https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk%20Gym/zqehoi3z154r8wschdfm',
        '3bfd488f-4b91-48c9-b312-4004be165cd2'
    );

INSERT INTO
    coupon (name, duration, offer, valid_until, terms)
VALUES
    (
        '7-Day Free Trial Pass',
        '7 Days',
        'Free Access to all gym facilities',
        '2025-03-31',
        'New members only. One-time use per person'
    );

INSERT INTO
    company_info (logo, company_name)
VALUES
    ('logo1.png', 'Hulk Gym');

INSERT INTO
    contact (email, phone_number, branch_id)
VALUES
    (
        '',
        '096 888 1234',
        '292e2078-3b75-4c21-b2be-e3372bf5b143'
    ),
    (
        '',
        '012 999 4567',
        '292e2078-3b75-4c21-b2be-e3372bf5b143'
    ),
    (
        '',
        '010 567 889',
        'b205f304-97f7-4449-9cab-f57615deeef0'
    ),
    (
        '',
        '092 111 3344',
        'b205f304-97f7-4449-9cab-f57615deeef0'
    ),
    (
        '',
        '098 777 6543',
        '87d1143b-4068-4ffd-b833-a88cfebb12a5'
    ),
    (
        '',
        ' 015 222 9988',
        '87d1143b-4068-4ffd-b833-a88cfebb12a5'
    ),
    (
        '',
        '097 123 4567',
        '7d370cc6-3494-4714-a674-ff3d48c6a3f9'
    ),
    (
        '',
        '011 888 2233',
        '7d370cc6-3494-4714-a674-ff3d48c6a3f9'
    ),
    (
        '',
        ' 093 999 1122',
        '29438320-2db0-4957-ac2a-05908b375076'
    ),
    (
        '',
        '069 333 5544',
        '29438320-2db0-4957-ac2a-05908b375076'
    );

INSERT INTO
    public.workout (type, "workoutPlan_id")
VALUES
    (
        'Chest & Back (Push-Pull Power)',
        '26931b25-a87d-4bf2-abee-99a58b80b4c4'
    ),
    (
        'Chest & Back (Push-Pull Power) ',
        '26931b25-a87d-4bf2-abee-99a58b80b4c4'
    ),
    (
        'Legs & Core',
        '26931b25-a87d-4bf2-abee-99a58b80b4c4'
    ),
    (
        ' Strength & Power Training ',
        '8c3d3df9-c65d-4d47-8b53-f97b7a15283e'
    ),
    (
        'Upper Body – Arms & Shoulders',
        '8c3d3df9-c65d-4d47-8b53-f97b7a15283e'
    ),
    (
        'Forearms & Grip Strength',
        '8c3d3df9-c65d-4d47-8b53-f97b7a15283e'
    ),
    (
        ' Core & Conditioning',
        '8c3d3df9-c65d-4d47-8b53-f97b7a15283e'
    ),
    (
        'Strength Training (Full Body)',
        'a5fc75bd-9ef4-46bc-8c98-68e74b8dd431'
    ),
    (
        'Core & Conditioning ',
        'a5fc75bd-9ef4-46bc-8c98-68e74b8dd431'
    ),
    (
        'Upper Body & Arms',
        'a5fc75bd-9ef4-46bc-8c98-68e74b8dd431'
    ),
    (
        'Cardio & Conditioning',
        'a5fc75bd-9ef4-46bc-8c98-68e74b8dd431'
    ),
    (
        'Cool Down & Stretching',
        'a5fc75bd-9ef4-46bc-8c98-68e74b8dd431'
    ),
    (
        'Strength & Power ',
        '8c30c110-bc28-4f6d-a4fc-ea5d09a8c2be'
    ),
    (
        'Core & Stability',
        '8c30c110-bc28-4f6d-a4fc-ea5d09a8c2be'
    ),
    (
        'Endurance & Cardio',
        '8c30c110-bc28-4f6d-a4fc-ea5d09a8c2be'
    ),
    (
        'Cool Down & Mobility',
        '8c30c110-bc28-4f6d-a4fc-ea5d09a8c2be'
    );

Arnod
INSERT INTO
    exercise (
        id,
        name,
        sets,
        weight_lbs,
        reps,
        calories,
        workout_id
    )
VALUES
    (
        'Bench Press',
        5,
        NULL,
        '8-12',
        '70-100 calories',
        'd7deeb1b-2d3e-473a-95f1-bf88280332fd'
    ),
    (
        'Incline Bench Press',
        4,
        NULL,
        '8-12',
        '60-85 calories',
        'd7deeb1b-2d3e-473a-95f1-bf88280332fd'
    ),
    (
        'Pull-Ups',
        4,
        NULL,
        '10-12',
        '40-60 calories',
        'd7deeb1b-2d3e-473a-95f1-bf88280332fd'
    ),
    (
        'Bent-Over Barbell Rows',
        4,
        NULL,
        '8-12',
        '60-90 calories',
        'd7deeb1b-2d3e-473a-95f1-bf88280332fd'
    ),
    (
        'Dumbbell Flys',
        3,
        NULL,
        '10',
        '40-55 calories',
        'd7deeb1b-2d3e-473a-95f1-bf88280332fd'
    ),
    (
        'Lat Pulldown',
        4,
        NULL,
        '8-12',
        '50-75 calories',
        'd7deeb1b-2d3e-473a-95f1-bf88280332fd'
    ),
    (
        'Barbell Curl',
        5,
        NULL,
        '8-12',
        '40-60 calories',
        '527239a1-7908-4b53-b046-ea21c2a2308e'
    ),
    (
        'Seated Dumbbell Press',
        5,
        NULL,
        '8-12',
        '50-75 calories',
        '527239a1-7908-4b53-b046-ea21c2a2308e'
    ),
    (
        'Skull Crushers (Lying Triceps Extensions)',
        4,
        NULL,
        '8-12',
        '40-60 calories',
        '527239a1-7908-4b53-b046-ea21c2a2308e'
    ),
    (
        'Dumbbell Lateral Raise',
        4,
        NULL,
        '10-12',
        '35-55 calories',
        '527239a1-7908-4b53-b046-ea21c2a2308e'
    ),
    (
        'Preacher Curls',
        4,
        NULL,
        '8-12',
        '40-60 calories',
        '527239a1-7908-4b53-b046-ea21c2a2308e'
    ),
    (
        'Cable Triceps Pushdowns',
        4,
        NULL,
        '10',
        '30-45 calories',
        '527239a1-7908-4b53-b046-ea21c2a2308e'
    ),
    (
        'Squats',
        6,
        NULL,
        '8-12',
        '80-120 calories',
        '5c83d1f3-7a6e-4902-8b4d-1206a0785079'
    ),
    (
        'Leg Press',
        5,
        NULL,
        '10-12',
        '70-100 calories',
        '5c83d1f3-7a6e-4902-8b4d-1206a0785079'
    ),
    (
        'Leg Curls',
        4,
        NULL,
        '10',
        '40-60 calories',
        '5c83d1f3-7a6e-4902-8b4d-1206a0785079'
    ),
    (
        'Standing Calf Raises',
        5,
        NULL,
        '15',
        '30-50 calories',
        '5c83d1f3-7a6e-4902-8b4d-1206a0785079'
    ),
    (
        'Seated Calf Raises',
        5,
        NULL,
        '15',
        '30-50 calories',
        '5c83d1f3-7a6e-4902-8b4d-1206a0785079'
    ),
    (
        'Hanging Leg Raises',
        4,
        NULL,
        '15',
        '30-50 calories',
        '5c83d1f3-7a6e-4902-8b4d-1206a0785079'
    );

Gal
INSERT INTO
    exercise (
        name,
        sets,
        weight_lbs,
        reps,
        calories,
        "workout_id"
    )
VALUES
    (
        'Deadlifts',
        4,
        NULL,
        '6-8',
        50,
        '2dff9944-319b-4c30-8792-3d5ac8d6eedd'
    ),
    (
        'Squats',
        4,
        NULL,
        '8-10',
        60,
        '2dff9944-319b-4c30-8792-3d5ac8d6eedd'
    ),
    (
        'Push-Ups',
        3,
        NULL,
        15,
        25,
        '2dff9944-319b-4c30-8792-3d5ac8d6eedd'
    ),
    (
        'Pull-Ups',
        3,
        NULL,
        '8-10',
        30,
        '2dff9944-319b-4c30-8792-3d5ac8d6eedd'
    ),
    (
        'Plank',
        3,
        NULL,
        '1-minute hold',
        20,
        '7e2616e2-791d-4016-ab20-2eb3eb9300ba'
    ),
    (
        'Russian Twists',
        3,
        NULL,
        20,
        25,
        '7e2616e2-791d-4016-ab20-2eb3eb9300ba'
    ),
    (
        'Leg Raises',
        4,
        NULL,
        15,
        20,
        '7e2616e2-791d-4016-ab20-2eb3eb9300ba'
    ),
    (
        'Dumbbell Shoulder Press',
        4,
        '15-25',
        10,
        30,
        'ac6ae7d4-6fe5-4403-9a18-713f912d93ad'
    ),
    (
        'Tricep Dips',
        4,
        NULL,
        12,
        20,
        'ac6ae7d4-6fe5-4403-9a18-713f912d93ad'
    ),
    (
        'Bicep Curls',
        4,
        '15-25',
        10,
        25,
        'ac6ae7d4-6fe5-4403-9a18-713f912d93ad'
    ),
    (
        'Box Jumps',
        3,
        NULL,
        10,
        40,
        '26f5a26f-0211-4157-83ed-f8206509ff23'
    ),
    (
        'Sprints',
        4,
        NULL,
        '30s on/30s off',
        40,
        '26f5a26f-0211-4157-83ed-f8206509ff23'
    ),
    (
        'Yoga/Stretching Routine',
        2,
        NULL,
        '10-15 min',
        20,
        '74286ac3-2cc1-4e37-9368-14aa45fecafd'
    );

Bruce Lee
INSERT INTO
    exercise (
        name,
        sets,
        weight_lbs,
        reps,
        calories,
        workout_id
    )
VALUES
    -- Strength & Power Training exercises
    (
        'Squat',
        3,
        '95 lbs',
        10,
        '~40-60 calories',
        'f326177d-63f6-4583-85c4-f90ebd8e6561'
    ),
    (
        'Two-Hand Curl',
        3,
        '70-80 lbs',
        8,
        '~35-50 calories',
        'f326177d-63f6-4583-85c4-f90ebd8e6561'
    ),
    (
        'Push-Up',
        3,
        'bodyweight',
        10,
        '~25-40 calories',
        'f326177d-63f6-4583-85c4-f90ebd8e6561'
    ),
    -- Upper Body exercises
    (
        'French Press 1',
        4,
        '64 lbs',
        6,
        '~30-45 calories',
        '80912b3f-3386-429c-9955-02de68b69ba8'
    ),
    (
        'French Press 2',
        4,
        '64 lbs',
        6,
        '~30-45 calories',
        '80912b3f-3386-429c-9955-02de68b69ba8'
    ),
    (
        'Incline Curl',
        4,
        '35 lbs',
        6,
        '~25-35 calories',
        '80912b3f-3386-429c-9955-02de68b69ba8'
    ),
    (
        '"Con" Curl',
        4,
        '35 lbs',
        6,
        '~25-35 calories',
        '80912b3f-3386-429c-9955-02de68b69ba8'
    ),
    (
        'Tricep Stretch',
        3,
        '8 lbs',
        10,
        '~15-25 calories',
        '80912b3f-3386-429c-9955-02de68b69ba8'
    ),
    (
        'Dumbbell Curl',
        4,
        '64 lbs',
        6,
        '~30-45 calories',
        '80912b3f-3386-429c-9955-02de68b69ba8'
    ),
    -- Forearms & Grip Strength exercises
    (
        'Reverse Curl',
        4,
        '64 lbs',
        6,
        '~30-45 calories',
        'a6e50fcb-069c-4337-918a-41701cfcb145'
    ),
    (
        'Wrist Curl 1',
        4,
        'infinite weight',
        10,
        '~15-25 calories',
        'a6e50fcb-069c-4337-918a-41701cfcb145'
    ),
    (
        'Wrist Curl 2',
        4,
        'infinite weight',
        10,
        '~15-25 calories',
        'a6e50fcb-069c-4337-918a-41701cfcb145'
    ),
    -- Core & Conditioning exercises
    (
        'Sit-Up',
        5,
        'bodyweight',
        12,
        '~20-35 calories',
        'e212b185-0332-409c-aa7e-55dc2db6b22c'
    ),
    (
        'Calf Raise',
        5,
        'bodyweight',
        20,
        '~20-30 calories',
        'e212b185-0332-409c-aa7e-55dc2db6b22c'
    );

Fullbody
INSERT INTO
    exercise (
        name,
        sets,
        weight_lbs,
        reps,
        calories,
        workout_id
    )
VALUES
    (
        'Squats',
        4,
        NULL,
        10,
        '~60-80 calories',
        '9081503e-e5ce-4344-a758-a0ee89cea903'
    ),
    (
        'Deadlifts',
        4,
        NULL,
        8,
        '~70-90 calories',
        '9081503e-e5ce-4344-a758-a0ee89cea903'
    ),
    (
        'Push-Ups',
        3,
        NULL,
        15,
        '~30-45 calories',
        '9081503e-e5ce-4344-a758-a0ee89cea903'
    ),
    (
        'Pull-Ups',
        3,
        NULL,
        10,
        '~40-60 calories',
        '9081503e-e5ce-4344-a758-a0ee89cea903'
    ),
    (
        'Dumbbell Shoulder Press',
        3,
        NULL,
        10,
        '~30-50 calories',
        '9081503e-e5ce-4344-a758-a0ee89cea903'
    ),
    (
        'Plank Hold',
        3,
        NULL,
        '1 minute',
        '~20-30 calories',
        'b146a34f-e061-4fb2-b8f8-de775ea67dd8'
    ),
    (
        'Russian Twists',
        3,
        NULL,
        '20 reps',
        '~25-35 calories',
        'b146a34f-e061-4fb2-b8f8-de775ea67dd8'
    ),
    (
        'Leg Raises',
        4,
        NULL,
        '12 reps',
        '~20-35 calories',
        'b146a34f-e061-4fb2-b8f8-de775ea67dd8'
    ),
    (
        'Bicycle Crunches',
        3,
        NULL,
        '20 reps',
        '~25-40 calories',
        'b146a34f-e061-4fb2-b8f8-de775ea67dd8'
    ),
    (
        'Jump Rope',
        3,
        NULL,
        '1 minute',
        '~80-100 calories',
        'a33b7d65-1740-45f8-8ad6-77dc2957caed'
    ),
    (
        'Box Jumps',
        3,
        NULL,
        '10 reps',
        '~40-60 calories',
        'a33b7d65-1740-45f8-8ad6-77dc2957caed'
    ),
    (
        'Sprints',
        4,
        NULL,
        '30 seconds on/30 seconds off',
        '~50-70 calories',
        'a33b7d65-1740-45f8-8ad6-77dc2957caed'
    ),
    (
        'Burpees',
        3,
        NULL,
        '12 reps',
        '~50-70 calories',
        'a33b7d65-1740-45f8-8ad6-77dc2957caed'
    ),
    (
        'Yoga/Stretching Routine',
        1,
        NULL,
        '10-15 minutes',
        '~20-30 calories',
        '54b5a5af-2d48-4654-858d-5e291c8f29ed'
    );

INSERT INTO
    public.promotion (
        promo_name,
        discount_rate,
        expiry_date,
        offer_details,
        branch_id
    )
VALUES
    (
        'Elite Strength Package',
        20,
        '2025-12-31',
        'Exclusive fitness package with premium benefits',
        'b205f304-97f7-4449-9cab-f57615deeef0'
    ),
    (
        'Total Fitness Deal',
        25,
        '2025-03-31',
        'Get 25% OFF on a 6-month plan + 15% OFF on group training classes',
        '7d370cc6-3494-4714-a674-ff3d48c6a3f9'
    );