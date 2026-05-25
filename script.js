/* ================================================================
   RANDOM COUNTRY LIFESTYLE CHALLENGE — MAXIMUM EDITION
   UI/UX/SFX/BGM Fully Optimized. User Experience Priority.
   ================================================================ */

/* ========== Country Data (20 Countries, Balanced Across 6 Continents) ========== */
const countries = [
  /* ===== ASIA (6) ===== */
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    background: 'China has a long history emphasising family bonds, respect for elders, and the value of education. In many contexts, daily life revolves around shared meals and collective responsibility.',
    focus: 'Family, respect, education, shared meals, and social responsibility.',
    identity: 'Chinese daily habits can shape identity by encouraging respect, family responsibility, education and social belonging.',
    tasks: [
      { time: '7:30 AM', title: 'Breakfast', emoji: '🥟', instruction: 'Eat a warm breakfast such as baozi, congee, noodles or soy milk.', meaning: 'A warm morning meal can be connected to comfort, daily rhythm and cultural identity.' },
      { time: '8:30 AM', title: 'Greeting Elders or Teachers', emoji: '🙏', instruction: 'Greet teachers, parents or elders politely and show respect in your words and posture.', meaning: 'Respectful greetings may reinforce social harmony and the importance of intergenerational relationships.' },
      { time: '12:00 PM', title: 'Shared Lunch', emoji: '🍜', instruction: 'Eat lunch together with family, classmates or friends and share dishes from common plates.', meaning: 'Sharing food can strengthen group bonds and a sense of community belonging.' },
      { time: '4:00 PM', title: 'Study or Practise a Skill', emoji: '📚', instruction: 'Spend focused time studying, reading or practising a skill you want to improve.', meaning: 'Dedicated effort towards learning can reflect the cultural value placed on self-improvement and responsibility.' },
      { time: '6:30 PM', title: 'Help with a Family Task', emoji: '🏠', instruction: 'Assist a family member with a household chore or task without being asked.', meaning: 'Helping family may reinforce responsibility, care and the collective nature of home life.' },
      { time: '8:00 PM', title: 'Evening Reflection', emoji: '🌙', instruction: 'Reflect on one thing you learned today and one way you showed respect to someone.', meaning: 'Reflection can strengthen awareness of how daily actions connect to personal values and relationships.' }
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    background: 'Japanese culture in many contexts emphasises respect for others, punctuality, cleanliness, and maintaining social harmony. Self-discipline and awareness of group needs are often valued.',
    focus: 'Respect, punctuality, cleanliness, harmony and self-discipline.',
    identity: 'Japanese daily habits can shape identity by encouraging discipline, respect, social harmony and awareness of others.',
    tasks: [
      { time: '7:00 AM', title: 'Balanced Breakfast', emoji: '🍚', instruction: 'Prepare a balanced breakfast such as rice, miso soup, egg or fruit.', meaning: 'A thoughtful morning meal can reflect the value placed on balance, health and mindful preparation.' },
      { time: '8:00 AM', title: 'Prepare Carefully and Be On Time', emoji: '⏰', instruction: 'Organise your belongings and leave early so you arrive on time or slightly early.', meaning: 'Punctuality and preparation may show respect for others’ time and responsibilities.' },
      { time: '12:30 PM', title: 'Clean After Eating', emoji: '🧹', instruction: 'After lunch, clean your eating space thoroughly and dispose of waste properly.', meaning: 'Cleaning up after oneself can reflect consideration for shared spaces and communal responsibility.' },
      { time: '2:00 PM', title: 'Speak Politely and Listen', emoji: '🎧', instruction: 'In conversations today, use polite language and practise listening carefully before responding.', meaning: 'Polite communication may strengthen social harmony and mutual respect in relationships.' },
      { time: '7:00 PM', title: 'Quiet Evening Study or Reading', emoji: '📖', instruction: 'Spend time studying or reading in a quiet space without distractions.', meaning: 'Focused quiet time can encourage self-discipline and personal growth.' },
      { time: '9:00 PM', title: 'Reflect on Awareness', emoji: '🤔', instruction: 'Think about one moment today when you considered someone else’s feelings or needs.', meaning: 'Reflecting on awareness of others can reinforce empathy and social connection.' }
    ]
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    background: 'Indian culture across its diverse regions often centres on family ties, community gatherings, rich food traditions, respect for elders, and spiritual reflection. Hospitality and togetherness are commonly valued.',
    focus: 'Family, community, food traditions, respect and spirituality.',
    identity: 'Indian lifestyle habits can shape identity through family roles, community belonging, shared traditions and respect.',
    tasks: [
      { time: '8:00 AM', title: 'Traditional Breakfast', emoji: '🫓', instruction: 'Enjoy a traditional-style breakfast such as dosa, idli, paratha or fresh fruit.', meaning: 'Traditional food can connect people to heritage, family memory and cultural identity.' },
      { time: '9:00 AM', title: 'Respectful Family Greeting', emoji: '🙏', instruction: 'Greet family members respectfully, perhaps with a namaste or warm words to elders.', meaning: 'Respectful greetings may reinforce family bonds and intergenerational care.' },
      { time: '1:00 PM', title: 'Shared Meal', emoji: '🍛', instruction: 'Eat a meal with rice or bread and a variety of dishes, sharing food with others if possible.', meaning: 'Shared meals can reflect the cultural importance of hospitality and communal bonding.' },
      { time: '4:00 PM', title: 'Spend Time with Family, Neighbours or Friends', emoji: '👨‍👩‍👧‍👦', instruction: 'Spend quality time talking or doing an activity with family, neighbours or friends.', meaning: 'Social connection can strengthen community belonging and mutual support networks.' },
      { time: '7:00 PM', title: 'Reflect on a Family or Community Value', emoji: '🪔', instruction: 'Think about one value your family or community holds dear and how it guides daily life.', meaning: 'Reflection on values can help individuals understand how culture shapes moral identity.' },
      { time: '8:30 PM', title: 'Evening Gratitude', emoji: '💐', instruction: 'Express gratitude to someone in your family or community for something they did today.', meaning: 'Gratitude may reinforce positive relationships and a sense of belonging.' }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    background: 'Singapore is known for its multicultural society where people from different ethnic and religious backgrounds live together. Respect for diversity, efficient public life, and food culture are central to daily experiences.',
    focus: 'Multiculturalism, food diversity, respect, efficiency and social harmony.',
    identity: 'Singaporean daily habits can shape identity by encouraging multicultural awareness, respect for diversity and social harmony.',
    tasks: [
      { time: '8:00 AM', title: 'Local Breakfast', emoji: '🍞', instruction: 'Try a local-style breakfast such as kaya toast, soft-boiled eggs or noodles.', meaning: 'Local food can reflect the blending of cultures and shared culinary heritage.' },
      { time: '9:30 AM', title: 'Respectful Communication', emoji: '🤝', instruction: 'Practise respectful communication with someone from a different cultural background today.', meaning: 'Respectful interaction across cultures may strengthen social cohesion and mutual understanding.' },
      { time: '12:30 PM', title: 'Try Food from Another Culture', emoji: '🥡', instruction: 'At lunch, eat a dish from a culture different from your own.', meaning: 'Food exploration can encourage openness and appreciation for cultural diversity.' },
      { time: '3:00 PM', title: 'Follow Public Rules', emoji: '🚇', instruction: 'Be mindful of shared public rules such as queuing, keeping spaces clean or giving up a seat.', meaning: 'Following communal norms can reflect responsibility and care for collective wellbeing.' },
      { time: '6:00 PM', title: 'Social Time in a Shared Space', emoji: '🏙️', instruction: 'Spend time with friends or family in a hawker centre, mall, park or similar shared space.', meaning: 'Shared social spaces may foster community bonds and multicultural interaction.' },
      { time: '8:00 PM', title: 'Reflect on Diversity', emoji: '🌏', instruction: 'Think about one thing you learned from interacting with a different culture or perspective today.', meaning: 'Reflection on diversity can build empathy and broaden personal identity.' }
    ]
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    background: 'South Korean culture in many contexts emphasises respect for hierarchy, strong group identity, dedication to study or work, and sharing food as a social act. Politeness and effort are often highly valued.',
    focus: 'Respect, group identity, study/work effort, food sharing and social hierarchy.',
    identity: 'South Korean daily habits can shape identity through respect, effort, group belonging and awareness of social roles.',
    tasks: [
      { time: '7:30 AM', title: 'Korean-Style Breakfast', emoji: '🍲', instruction: 'Have a breakfast with rice, soup, egg or fruit.', meaning: 'A structured breakfast can reflect discipline and the importance of starting the day with care.' },
      { time: '8:30 AM', title: 'Use Polite Language', emoji: '🗣️', instruction: 'Use polite language and respectful posture when speaking with older people or teachers.', meaning: 'Polite speech may reflect awareness of social roles and respect for hierarchy.' },
      { time: '12:30 PM', title: 'Share Side Dishes', emoji: '🥢', instruction: 'During a meal, share side dishes with others and offer food before taking for yourself.', meaning: 'Food sharing can reinforce group belonging and mutual care in relationships.' },
      { time: '4:00 PM', title: 'Focused Study or Skill Practice', emoji: '✏️', instruction: 'Dedicate time to focused study or practising a skill with full concentration.', meaning: 'Concentrated effort can reflect cultural values of perseverance and self-improvement.' },
      { time: '6:30 PM', title: 'Connect Through Food or Conversation', emoji: '💬', instruction: 'Connect with friends or family through a shared meal or meaningful conversation.', meaning: 'Social connection through shared experiences may strengthen group identity and support.' },
      { time: '9:00 PM', title: 'Reflect on Group and Self', emoji: '🧘', instruction: 'Think about how your actions today affected your group or family, not just yourself.', meaning: 'Reflecting on group impact can encourage awareness of interdependence and social responsibility.' }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    background: 'Thai culture often emphasises respect, kindness, and maintaining harmonious social relationships. In many contexts, food is central to community life, and Buddhist values such as mindfulness and compassion can influence daily behaviour.',
    focus: 'Respect, kindness, food culture, community harmony and mindfulness.',
    identity: 'Thai daily habits can shape identity by encouraging kindness, social harmony, mindfulness and appreciation of shared experiences.',
    tasks: [
      { time: '7:30 AM', title: 'Respectful Morning Greeting', emoji: '🙏', instruction: 'Greet family or elders with a respectful wai or warm smile when you see them in the morning.', meaning: 'Respectful morning greetings may set a positive tone and reinforce care for family relationships.' },
      { time: '8:30 AM', title: 'Hearty Breakfast', emoji: '🍜', instruction: 'Eat a warm breakfast such as rice porridge, noodles or sticky rice with fruit.', meaning: 'A warm, nourishing breakfast can reflect the cultural importance of starting the day with energy and care.' },
      { time: '12:00 PM', title: 'Shared Meal with Others', emoji: '🍛', instruction: 'Eat lunch together with family, friends or classmates and share dishes from communal plates.', meaning: 'Sharing food can strengthen social bonds and reflect the value of communal dining.' },
      { time: '3:00 PM', title: 'Practise Kindness', emoji: '💚', instruction: 'Do one small kind act for someone today, such as helping a classmate or offering a compliment.', meaning: 'Small acts of kindness may reinforce compassion and positive social connections.' },
      { time: '6:00 PM', title: 'Evening Market or Social Walk', emoji: '🏮', instruction: 'Walk through a market, park or neighbourhood and observe or chat with people around you.', meaning: 'Being in communal spaces can foster a sense of belonging and social connection.' },
      { time: '8:00 PM', title: 'Evening Mindfulness', emoji: '🧘', instruction: 'Take a few minutes to sit quietly, breathe deeply, and reflect on one thing you are grateful for today.', meaning: 'Mindful reflection can encourage awareness of daily blessings and inner calm.' }
    ]
  },

  /* ===== EUROPE (5) ===== */
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    background: 'French culture often places great value on enjoying food, expressing opinions, and building social connections through conversation. Daily life in some contexts may revolve around meals and dialogue.',
    focus: 'Food culture, conversation, social connection and personal expression.',
    identity: 'French lifestyle habits can shape identity by encouraging social confidence, conversation and appreciation of daily life.',
    tasks: [
      { time: '8:00 AM', title: 'Breakfast', emoji: '🥐', instruction: 'Eat a light breakfast such as bread, croissant, butter, jam or hot chocolate.', meaning: 'A simple, enjoyable breakfast can be connected to comfort, daily rhythm and cultural identity.' },
      { time: '9:00 AM', title: 'Say "Bonjour"', emoji: '👋', instruction: 'Greet shopkeepers, teachers or classmates with "Bonjour" when entering a room or space.', meaning: 'A warm greeting may reflect the cultural importance of acknowledging others and building polite social bonds.' },
      { time: '12:30 PM', title: 'Take Time for Lunch', emoji: '🍽️', instruction: 'Sit down for lunch without rushing. Enjoy the flavours and textures of your meal.', meaning: 'Taking time to eat can reflect an appreciation for daily life and mindful living.' },
      { time: '4:00 PM', title: 'Meet a Friend', emoji: '☕', instruction: 'Spend time talking with a friend, classmate or family member about your day or interests.', meaning: 'Conversation can strengthen social connections and build confidence in expressing yourself.' },
      { time: '7:00 PM', title: 'Family or Friend Dinner', emoji: '🍷', instruction: 'Have dinner with family or friends and engage in meaningful conversation during the meal.', meaning: 'Shared evening meals may reinforce social bonds and the value of togetherness.' },
      { time: '9:00 PM', title: 'Evening Expression', emoji: '✍️', instruction: 'Write down or share one opinion or observation about something you experienced today.', meaning: 'Expressing thoughts openly can encourage self-awareness and personal identity development.' }
    ]
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    background: 'Italian culture often celebrates family connections, the enjoyment of food, lively conversation, and community life. A slower, more social rhythm in daily routines is commonly valued in many contexts.',
    focus: 'Family, food, conversation, community and slower social rhythm.',
    identity: 'Italian lifestyle habits can shape identity by encouraging family connection, social warmth, community belonging and appreciation of shared meals.',
    tasks: [
      { time: '8:00 AM', title: 'Simple Breakfast', emoji: '☕', instruction: 'Have a simple breakfast such as bread, pastry, fruit or coffee / a hot drink.', meaning: 'A simple, pleasant breakfast can reflect an appreciation for small daily pleasures.' },
      { time: '9:00 AM', title: 'Warm Greeting', emoji: '🤗', instruction: 'Greet people warmly when you meet them — use eye contact, a smile or a friendly word.', meaning: 'Warm greetings may build social trust and convey openness in relationships.' },
      { time: '1:00 PM', title: 'Enjoy Lunch Slowly', emoji: '🍝', instruction: 'Take your time eating lunch. Focus on the food and the people around you.', meaning: 'A leisurely meal can reflect the value of presence and enjoyment in daily life.' },
      { time: '5:00 PM', title: 'Spend Time in a Public Space', emoji: '🏛️', instruction: 'Walk or spend time in a public square, park or social space and observe or chat with others.', meaning: 'Being in communal spaces can strengthen community belonging and social connection.' },
      { time: '7:30 PM', title: 'Family Dinner and Conversation', emoji: '🍕', instruction: 'Have dinner with family and engage in conversation about your day.', meaning: 'Family meals with dialogue may reinforce closeness and shared identity.' },
      { time: '9:00 PM', title: 'Evening Walk or Relaxation', emoji: '🌆', instruction: 'Take a relaxed evening walk or sit outside to unwind and reflect on your day.', meaning: 'A slower evening rhythm can encourage reflection and balance in daily life.' }
    ]
  },
  {
    id: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    background: 'Spanish culture often values family closeness, lively social gatherings, and a relaxed approach to daily timing. Meals are frequently shared experiences, and personal connections through conversation are highly cherished in many contexts.',
    focus: 'Family, food, social warmth, conversation and relaxed rhythm.',
    identity: 'Spanish lifestyle habits can shape identity by encouraging family closeness, social warmth, expressive communication and enjoyment of shared moments.',
    tasks: [
      { time: '8:30 AM', title: 'Light Breakfast', emoji: '🥖', instruction: 'Have a light breakfast such as toast with tomato, a pastry, fruit or a hot drink.', meaning: 'A simple breakfast can reflect the value of easing into the day with simple pleasures.' },
      { time: '10:00 AM', title: 'Warm Social Greeting', emoji: '🤗', instruction: 'Greet people you meet with warmth — use a smile, eye contact or friendly words.', meaning: 'Warm greetings may build trust and reflect the cultural value of personal connection.' },
      { time: '2:30 PM', title: 'Long Lunch with Others', emoji: '🥘', instruction: 'Eat a relaxed lunch with family or friends and take time to enjoy the conversation.', meaning: 'A leisurely shared meal can strengthen bonds and reflect appreciation for social time.' },
      { time: '5:30 PM', title: 'Afternoon Social Time', emoji: '☕', instruction: 'Spend time with friends or family, perhaps over a snack or drink, and talk about your day.', meaning: 'Social gatherings can reinforce community belonging and personal relationships.' },
      { time: '8:00 PM', title: 'Evening Stroll', emoji: '🌇', instruction: 'Take a relaxed evening walk in your neighbourhood or a nearby park.', meaning: 'An evening stroll can encourage reflection, connection with surroundings and social interaction.' },
      { time: '9:30 PM', title: 'Family Conversation', emoji: '💬', instruction: 'Sit with family and share stories or thoughts about your day before resting.', meaning: 'Evening conversation may reinforce family closeness and the value of shared daily life.' }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    background: 'German culture in many contexts values punctuality, structure, environmental awareness, and direct yet respectful communication. Efficiency and reliability are often appreciated, while community responsibility and outdoor activities play meaningful roles in daily life.',
    focus: 'Punctuality, structure, environmental care, direct communication and community responsibility.',
    identity: 'German daily habits can shape identity by encouraging reliability, environmental awareness, clear communication and social responsibility.',
    tasks: [
      { time: '7:30 AM', title: 'Hearty Breakfast', emoji: '🥨', instruction: 'Eat a structured breakfast with bread, cheese, fruit or yoghurt and a hot drink.', meaning: 'A structured morning meal can reflect discipline and the value of starting the day with energy.' },
      { time: '8:30 AM', title: 'Be Punctual and Prepared', emoji: '⏰', instruction: 'Arrive on time or slightly early for class, meetings or appointments.', meaning: 'Punctuality may show respect for others’ time and reflect organisational values.' },
      { time: '12:30 PM', title: 'Recycle and Dispose Properly', emoji: '♻️', instruction: 'Sort your waste into recycling, compost and general bins after eating.', meaning: 'Proper waste sorting can reflect environmental responsibility and care for shared spaces.' },
      { time: '3:00 PM', title: 'Direct and Honest Conversation', emoji: '🗣️', instruction: 'In a conversation today, express your thoughts clearly and politely without exaggeration.', meaning: 'Direct yet respectful communication may build trust and mutual understanding.' },
      { time: '5:30 PM', title: 'Outdoor Activity or Walk', emoji: '🌳', instruction: 'Spend time outside walking, cycling or enjoying nature in a park or green space.', meaning: 'Outdoor activity can reflect appreciation for nature and personal wellbeing.' },
      { time: '8:00 PM', title: 'Plan and Reflect', emoji: '📋', instruction: 'Think about one thing you accomplished today and one thing you plan to do tomorrow.', meaning: 'Reflection and planning may encourage self-discipline and purposeful living.' }
    ]
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    background: 'Swedish culture often emphasises equality, work-life balance, nature connection, and consensus-based decision making. In many contexts, humility, environmental care, and respect for personal space are valued aspects of social life.',
    focus: 'Equality, work-life balance, nature connection, humility and consensus.',
    identity: 'Swedish daily habits can shape identity by encouraging equality, balance, environmental care and respectful independence.',
    tasks: [
      { time: '7:30 AM', title: 'Fika-Style Break', emoji: '☕', instruction: 'Take a calm morning moment with a warm drink and a small snack, perhaps with someone else.', meaning: 'A mindful break can reflect the value of slowing down and connecting with others.' },
      { time: '9:00 AM', title: 'Respect Personal Space', emoji: '🤝', instruction: 'Be mindful of others’ personal space and quiet needs in shared areas today.', meaning: 'Respecting boundaries may reflect awareness of others and social consideration.' },
      { time: '12:30 PM', title: 'Outdoor Lunch Break', emoji: '🌲', instruction: 'If possible, eat lunch outside or near a window with natural light and fresh air.', meaning: 'Connecting with nature during the day can support wellbeing and balance.' },
      { time: '3:30 PM', title: 'Collaborative Discussion', emoji: '💬', instruction: 'In a group discussion, listen to all voices and seek agreement rather than dominating.', meaning: 'Consensus-seeking may reinforce equality and mutual respect in relationships.' },
      { time: '5:30 PM', title: 'Nature Walk', emoji: '🚶', instruction: 'Take a walk in a park, forest path or near water to clear your mind after the day.', meaning: 'Time in nature can encourage reflection, calm and appreciation for the environment.' },
      { time: '8:00 PM', title: 'Evening Reflection on Balance', emoji: '🌙', instruction: 'Reflect on how you balanced work, rest and social time today.', meaning: 'Reflection on balance can encourage healthier habits and self-awareness.' }
    ]
  },

  /* ===== AFRICA (4) ===== */
  {
    id: 'morocco',
    name: 'Morocco',
    flag: '🇲🇦',
    background: 'Moroccan culture often blends hospitality, community tradition, and spiritual reflection. In many contexts, sharing tea and meals with guests is a sign of respect, and family bonds are deeply cherished.',
    focus: 'Hospitality, family, spiritual reflection, community tradition and shared meals.',
    identity: 'Moroccan daily habits can shape identity through hospitality, family connection, spiritual awareness and community belonging.',
    tasks: [
      { time: '8:00 AM', title: 'Warm Family Greeting', emoji: '☀️', instruction: 'Greet your family warmly in the morning and ask how they slept.', meaning: 'Morning greetings may reinforce family care and emotional connection.' },
      { time: '9:00 AM', title: 'Mint Tea Ritual', emoji: '🍵', instruction: 'Prepare and share a cup of mint tea with a family member or friend, pouring with care.', meaning: 'The tea ritual can reflect hospitality, patience and respect for guests.' },
      { time: '1:00 PM', title: 'Shared Communal Meal', emoji: '🍲', instruction: 'Eat a shared meal from a communal dish with family or friends, using bread to scoop if appropriate.', meaning: 'Communal eating can strengthen bonds and reflect shared cultural identity.' },
      { time: '4:00 PM', title: 'Community Check-In', emoji: '🤝', instruction: 'Ask a neighbour, classmate or family member how their day is going and truly listen.', meaning: 'Checking in with others may reinforce community support and empathy.' },
      { time: '6:30 PM', title: 'Evening Prayer or Quiet Reflection', emoji: '🙏', instruction: 'Spend a few minutes in quiet prayer, meditation or reflection on gratitude.', meaning: 'Spiritual reflection can provide inner peace and connect personal values to daily life.' },
      { time: '8:00 PM', title: 'Storytelling or Conversation', emoji: '📖', instruction: 'Share a story, memory or lesson with family or friends in the evening.', meaning: 'Oral storytelling may preserve cultural memory and strengthen family bonds.' }
    ]
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    flag: '🇳🇬',
    background: 'Nigerian culture across its many ethnic groups often values respect for elders, vibrant social expression, communal eating, and strong family networks. Hospitality and colourful traditions are central to many daily experiences.',
    focus: 'Respect for elders, family, communal eating, hospitality and social expression.',
    identity: 'Nigerian daily habits can shape identity through respect, family loyalty, hospitality and vibrant social connection.',
    tasks: [
      { time: '7:30 AM', title: 'Hearty Breakfast', emoji: '🍌', instruction: 'Eat a filling breakfast such as plantain, eggs, bread or fruit to start the day with energy.', meaning: 'A hearty breakfast can reflect the cultural value of strength and nourishment.' },
      { time: '8:30 AM', title: 'Greet Elders Respectfully', emoji: '🙏', instruction: 'Greet parents, teachers or elders with respectful words and posture.', meaning: 'Respectful greetings may reinforce intergenerational care and social values.' },
      { time: '1:00 PM', title: 'Shared Meal from One Pot', emoji: '🍛', instruction: 'Eat lunch with others from a shared pot or plate and encourage others to eat first.', meaning: 'Shared eating can reflect hospitality, generosity and community belonging.' },
      { time: '4:00 PM', title: 'Express Yourself Through Music or Dance', emoji: '🎵', instruction: 'Listen to music, clap along, or move to a rhythm that lifts your mood.', meaning: 'Music and movement can foster joy, cultural expression and emotional release.' },
      { time: '6:30 PM', title: 'Help a Family Member', emoji: '🏠', instruction: 'Assist with a household task such as cleaning, cooking or running an errand.', meaning: 'Helping family may reinforce responsibility, care and collective identity.' },
      { time: '8:00 PM', title: 'Evening Story or Proverb', emoji: '📜', instruction: 'Share a proverb, lesson or story with someone about wisdom or community values.', meaning: 'Sharing wisdom can preserve cultural identity and guide moral development.' }
    ]
  },
  {
    id: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    background: 'Kenyan culture across its diverse communities often values hospitality, communal work, respect for elders, and connection to nature. In many contexts, sharing and working together are seen as essential parts of social life.',
    focus: 'Hospitality, communal work, respect for elders, nature connection and sharing.',
    identity: 'Kenyan daily habits can shape identity through hospitality, community cooperation, respect and environmental awareness.',
    tasks: [
      { time: '7:00 AM', title: 'Morning Greeting', emoji: '🌅', instruction: 'Greet your family or household with "Habari za asubuhi" or a warm good morning.', meaning: 'Morning greetings may set a respectful and caring tone for the day.' },
      { time: '8:00 AM', title: 'Simple Breakfast', emoji: '🫓', instruction: 'Eat a breakfast such as porridge, bread, fruit or tea with milk.', meaning: 'A simple, shared breakfast can reflect humility and the value of nourishment.' },
      { time: '12:30 PM', title: 'Communal Task or Helping Others', emoji: '🤝', instruction: 'Help a classmate, neighbour or family member with a task they need assistance with.', meaning: 'Helping others may reinforce community spirit and mutual support.' },
      { time: '3:00 PM', title: 'Nature Observation', emoji: '🌳', instruction: 'Spend time outside observing plants, birds or the sky around you.', meaning: 'Observing nature can strengthen environmental connection and mindful awareness.' },
      { time: '6:00 PM', title: 'Shared Evening Meal', emoji: '🍲', instruction: 'Eat dinner with family or friends and discuss the events of the day together.', meaning: 'Shared meals can reinforce family bonds and community identity.' },
      { time: '7:30 PM', title: 'Reflect on Community', emoji: '🌍', instruction: 'Think about one way your community supports you and one way you support them.', meaning: 'Reflection on community can build gratitude and awareness of interdependence.' }
    ]
  },
  {
    id: 'egypt',
    name: 'Egypt',
    flag: '🇪🇬',
    background: 'Egyptian culture often values family respect, hospitality, education, and historical awareness. In many contexts, strong family ties and warm social interactions shape daily routines, while ancient traditions continue to influence modern life.',
    focus: 'Family respect, hospitality, education, historical awareness and social warmth.',
    identity: 'Egyptian daily habits can shape identity through family loyalty, hospitality, respect for knowledge and appreciation of heritage.',
    tasks: [
      { time: '7:30 AM', title: 'Warm Family Breakfast', emoji: '🥙', instruction: 'Eat breakfast with family, perhaps bread, cheese, beans or fruit, and ask about their plans.', meaning: 'A shared breakfast can reinforce family connection and daily emotional support.' },
      { time: '8:30 AM', title: 'Greet with Respect', emoji: '🙏', instruction: 'Greet teachers, parents or elders with respectful words and attentive posture.', meaning: 'Respectful greetings may reflect the cultural value placed on hierarchy and care.' },
      { time: '12:30 PM', title: 'Shared Lunch', emoji: '🍛', instruction: 'Eat lunch with others and share food generously, offering the best portion to guests or elders.', meaning: 'Generous sharing can reflect hospitality and social honour.' },
      { time: '3:30 PM', title: 'Learn Something New', emoji: '📚', instruction: 'Read about a topic that interests you or ask someone to teach you a new word or skill.', meaning: 'Pursuing knowledge may reflect the cultural value placed on education and curiosity.' },
      { time: '6:00 PM', title: 'Evening Tea with Family', emoji: '🍵', instruction: 'Sit with family over tea and talk about your day, your thoughts or your dreams.', meaning: 'Evening tea time can strengthen family dialogue and emotional closeness.' },
      { time: '8:00 PM', title: 'Reflect on Heritage', emoji: '🏛️', instruction: 'Think about one tradition, story or value from your culture that shapes who you are.', meaning: 'Reflecting on heritage can strengthen personal identity and cultural pride.' }
    ]
  },

  /* ===== NORTH AMERICA (2) ===== */
  {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    background: 'Mexican culture often places great importance on family closeness, community celebrations, rich food traditions, and warm social interactions. Hospitality and togetherness are central to many daily experiences.',
    focus: 'Family, community, food traditions, celebration and social warmth.',
    identity: 'Mexican daily habits can shape identity through family closeness, community connection, food traditions and social warmth.',
    tasks: [
      { time: '8:00 AM', title: 'Hearty Breakfast', emoji: '🌮', instruction: 'Eat a breakfast such as eggs, tortillas, beans or fresh fruit.', meaning: 'A hearty breakfast can reflect the cultural value of nourishment and energy for the day.' },
      { time: '9:00 AM', title: 'Warm Greeting to Family or Friends', emoji: '❤️', instruction: 'Greet family or friends warmly, perhaps with a hug or friendly words.', meaning: 'Warm greetings may reinforce affection and closeness in relationships.' },
      { time: '2:00 PM', title: 'Shared Meal with Family or Friends', emoji: '🥘', instruction: 'Eat a shared meal with family or friends and enjoy the food together.', meaning: 'Shared meals can strengthen family ties and celebrate togetherness.' },
      { time: '5:00 PM', title: 'Music or Social Activity', emoji: '🎵', instruction: 'Listen to music or join a social activity with family, friends or your community.', meaning: 'Music and social activities can foster joy, cultural expression and community bonds.' },
      { time: '7:00 PM', title: 'Reflect on Family and Community', emoji: '🕯️', instruction: 'Think about the role your family and community play in your daily life and identity.', meaning: 'Reflection on community can help individuals appreciate how relationships shape who they are.' },
      { time: '8:30 PM', title: 'Express Appreciation', emoji: '💌', instruction: 'Tell someone in your family or community why you appreciate them.', meaning: 'Expressing appreciation may deepen social bonds and reinforce mutual support.' }
    ]
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    background: 'American culture is highly diverse, but in many contexts values such as individual expression, community volunteering, direct communication, and work ethic are emphasised. Regional and ethnic diversity means daily habits can vary widely across the country.',
    focus: 'Individual expression, community involvement, direct communication and diversity.',
    identity: 'American daily habits can shape identity by encouraging self-expression, community participation, open communication and appreciation of diversity.',
    tasks: [
      { time: '8:00 AM', title: 'Quick Breakfast', emoji: '🥞', instruction: 'Eat a breakfast such as cereal, toast, fruit or eggs to start your day.', meaning: 'A practical morning meal can reflect a focus on energy and productivity.' },
      { time: '9:00 AM', title: 'Friendly Greeting', emoji: '👋', instruction: 'Greet classmates, teachers or colleagues with a friendly word, smile or wave.', meaning: 'Friendly greetings may create an open, welcoming atmosphere in daily interactions.' },
      { time: '12:30 PM', title: 'Casual Lunch with Peers', emoji: '🥪', instruction: 'Eat lunch with friends or classmates and discuss your interests or plans.', meaning: 'Casual social meals can build peer connections and confidence in conversation.' },
      { time: '4:00 PM', title: 'Help Your Community', emoji: '🤝', instruction: 'Do one small act of community service, such as picking up litter or helping a peer.', meaning: 'Community service can reflect social responsibility and the value of giving back.' },
      { time: '6:30 PM', title: 'Share Your Opinion', emoji: '🗣️', instruction: 'In a respectful conversation, share your honest opinion or perspective on a topic.', meaning: 'Expressing opinions openly can encourage self-confidence and authentic identity.' },
      { time: '8:00 PM', title: 'Reflect on Individual and Community', emoji: '🤔', instruction: 'Think about one personal goal you have and one way you can help your community.', meaning: 'Balancing personal and community goals can shape a well-rounded sense of identity.' }
    ]
  },

  /* ===== SOUTH AMERICA (2) ===== */
  {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    background: 'Brazilian culture often celebrates warmth, social connection, music, and outdoor life. In many contexts, relationships are built through expressive communication, shared meals, and collective joy, while flexibility and adaptability are valued traits.',
    focus: 'Warmth, social connection, music, outdoor life and expressive communication.',
    identity: 'Brazilian daily habits can shape identity through social warmth, expressive joy, adaptability and appreciation of community.',
    tasks: [
      { time: '7:30 AM', title: 'Bright Morning Greeting', emoji: '☀️', instruction: 'Greet people around you with warmth, a smile and positive energy.', meaning: 'A warm greeting can set a joyful tone and reflect social openness.' },
      { time: '8:30 AM', title: 'Fruit-Filled Breakfast', emoji: '🍌', instruction: 'Eat a breakfast with fresh fruit, bread or a smoothie to start the day vibrantly.', meaning: 'A fresh breakfast can reflect the cultural appreciation for natural, colourful food.' },
      { time: '12:30 PM', title: 'Relaxed Shared Lunch', emoji: '🍲', instruction: 'Eat lunch with others in a relaxed way, talking and laughing without rushing.', meaning: 'A leisurely shared meal can strengthen bonds and reflect enjoyment of social time.' },
      { time: '4:00 PM', title: 'Music or Movement Break', emoji: '🎵', instruction: 'Listen to music, tap your feet, or dance to a rhythm for a few minutes.', meaning: 'Music and movement can express emotion, release stress and build joy.' },
      { time: '6:00 PM', title: 'Outdoor Social Time', emoji: '🏖️', instruction: 'Spend time outside with friends or family, perhaps in a park or open space.', meaning: 'Outdoor social time can reflect appreciation for nature and communal life.' },
      { time: '8:00 PM', title: 'Express Gratitude Openly', emoji: '❤️', instruction: 'Tell someone openly and warmly why you value their friendship or presence.', meaning: 'Open expression of gratitude may deepen trust and emotional connection.' }
    ]
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flag: '🇦🇷',
    background: 'Argentine culture often values deep friendship, family gatherings, and expressive conversation. In many contexts, sharing mate tea, enjoying meals together, and engaging in passionate dialogue are central to building social bonds.',
    focus: 'Deep friendship, family gatherings, shared rituals, expressive conversation.',
    identity: 'Argentine daily habits can shape identity through loyalty, passionate expression, family devotion and appreciation of shared rituals.',
    tasks: [
      { time: '8:00 AM', title: 'Shared Morning Drink', emoji: '☕', instruction: 'Share a warm drink such as tea, coffee or mate with a family member and talk.', meaning: 'Sharing a morning drink can reflect the value of starting the day together.' },
      { time: '9:30 AM', title: 'Warm Embrace or Greeting', emoji: '🤗', instruction: 'Greet a friend or family member with a warm hug, kiss on the cheek or kind words.', meaning: 'Physical warmth in greetings may reinforce affection and close relationships.' },
      { time: '1:00 PM', title: 'Long Lunch with Conversation', emoji: '🥩', instruction: 'Eat a leisurely lunch with family or friends and engage in deep conversation.', meaning: 'A long, talkative lunch can strengthen social bonds and reflect appreciation for dialogue.' },
      { time: '4:00 PM', title: 'Mate Circle or Tea with Friends', emoji: '🧉', instruction: 'Sit with friends or family and share a round of tea, mate or snacks while talking.', meaning: 'Shared drinking circles can reinforce equality, trust and communal identity.' },
      { time: '6:30 PM', title: 'Walk and Talk', emoji: '🚶', instruction: 'Take an evening walk with someone and talk about your thoughts, dreams or daily events.', meaning: 'Walking and talking together can build intimacy and shared understanding.' },
      { time: '8:30 PM', title: 'Reflect on Friendship', emoji: '💭', instruction: 'Think about one friend who has shaped your life and what loyalty means to you.', meaning: 'Reflecting on friendship can strengthen appreciation for deep social bonds.' }
    ]
  },

  /* ===== OCEANIA (1) ===== */
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    background: 'Australian culture often values outdoor activity, casual social interaction, multicultural inclusion, and a relaxed approach to daily life. In many contexts, fairness, humour, and connection to nature shape how people interact with others.',
    focus: 'Outdoor activity, casual social interaction, multicultural inclusion and fairness.',
    identity: 'Australian daily habits can shape identity through openness, humour, environmental connection and respect for diversity.',
    tasks: [
      { time: '7:30 AM', title: 'Outdoor Breakfast or Fresh Air', emoji: '🌅', instruction: 'Eat breakfast outside or near a window, or step outside for fresh air before starting your day.', meaning: 'Morning fresh air can reflect appreciation for nature and an active start to the day.' },
      { time: '8:30 AM', title: 'Casual Friendly Greeting', emoji: '👋', instruction: 'Greet someone with a casual, friendly word or gesture — keep it light and genuine.', meaning: 'Casual friendliness may create an inclusive, relaxed social atmosphere.' },
      { time: '12:30 PM', title: 'Outdoor Lunch', emoji: '🥪', instruction: 'Eat lunch outside in a park, courtyard or sunny spot if possible.', meaning: 'Eating outdoors can reflect the cultural value of connecting with nature and fresh air.' },
      { time: '3:30 PM', title: 'Active Outdoor Break', emoji: '🏃', instruction: 'Spend time outside being active — walk, stretch, play a game or enjoy the sunshine.', meaning: 'Outdoor activity can encourage physical health and appreciation for the environment.' },
      { time: '6:00 PM', title: 'Barbecue or Shared Meal', emoji: '🍖', instruction: 'Cook or eat a simple shared meal with family or friends, perhaps grilled food or salads.', meaning: 'Shared casual meals can reinforce social bonds and community spirit.' },
      { time: '7:30 PM', title: 'Reflect on Fairness and Inclusion', emoji: '🤔', instruction: 'Think about one way you included someone today or stood up for fairness.', meaning: 'Reflecting on fairness can strengthen moral identity and social responsibility.' }
    ]
  }
];

/* ========== Achievement Definitions ========== */
const achievementDefs = [
  { id: 'first_draw', icon: '🌍', title: 'First Draw', desc: 'Draw your first country' },
  { id: 'task_master', icon: '✅', title: 'Task Master', desc: 'Complete all tasks for one country' },
  { id: 'explorer', icon: '🔄', title: 'Explorer', desc: 'Draw 5 different countries' },
  { id: 'globetrotter', icon: '🌐', title: 'Globetrotter', desc: 'Draw 12 different countries' },
  { id: 'deep_thinker', icon: '📝', title: 'Deep Thinker', desc: 'Write a reflection' },
  { id: 'music_lover', icon: '🎵', title: 'Music Lover', desc: 'Turn on background music' },
  { id: 'sound_on', icon: '🔊', title: 'Sound On', desc: 'Enable sound effects' },
  { id: 'night_owl', icon: '🌙', title: 'Night Owl', desc: 'Use dark mode' },
  { id: 'perfect_day', icon: '🎯', title: 'Perfect Day', desc: 'Complete all tasks without resetting' },
  { id: 'cultural_scholar', icon: '📜', title: 'Cultural Scholar', desc: 'View your certificate' }
];

/* ========== State ========== */
let currentCountry = null;
let soundEnabled = false;
let bgmEnabled = false;
let audioCtx = null;
let bgmInterval = null;
let sfxVolume = 0.5;
let bgmVolume = 0.3;
let achievements = {};
let drawHistory = [];
let reducedMotion = false;
let bgmSequenceIndex = 0;
let hasReset = false;

/* ========== DOM Elements ========== */
const pageLoader = document.getElementById('pageLoader');
const cursorGlow = document.getElementById('cursorGlow');
const scrollProgressFill = document.getElementById('scrollProgressFill');
const flagDisplay = document.getElementById('flagDisplay');
const countryNameDisplay = document.getElementById('countryNameDisplay');
const spinnerRing = document.getElementById('spinnerRing');
const spinnerGlow = document.querySelector('.spinner-glow');
const drawBtn = document.getElementById('drawBtn');
const drawAgainBtn = document.getElementById('drawAgainBtn');
const resultSection = document.getElementById('resultSection');
const challengeSection = document.getElementById('challengeSection');
const reflectionSection = document.getElementById('reflectionSection');
const resultFlag = document.getElementById('resultFlag');
const resultCountryName = document.getElementById('resultCountryName');
const resultBackground = document.getElementById('resultBackground');
const resultFocus = document.getElementById('resultFocus');
const resultIdentity = document.getElementById('resultIdentity');
const tasksContainer = document.getElementById('tasksContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const celebration = document.getElementById('celebration');
const themeIcon = document.getElementById('themeIcon');
const soundIcon = document.getElementById('soundIcon');
const bgmIcon = document.getElementById('bgmIcon');
const bgmStatus = document.getElementById('bgmStatus');
const backToTop = document.getElementById('backToTop');
const confettiCanvas = document.getElementById('confettiCanvas');
const miniParticlesCanvas = document.getElementById('miniParticles');
const toastContainer = document.getElementById('toastContainer');
const reflectionText = document.getElementById('reflectionText');
const settingsPanel = document.getElementById('settingsPanel');
const achievementsPanel = document.getElementById('achievementsPanel');
const achievementsBody = document.getElementById('achievementsBody');
const achieveDot = document.getElementById('achieveDot');
const historyArea = document.getElementById('historyArea');
const historyList = document.getElementById('historyList');
const onboarding = document.getElementById('onboarding');

/* ================================================================
   AUDIO ENGINE (Web Audio API + Stereo Panning)
   ================================================================ */

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq, duration, type = 'sine', volume = 0.15, pan = 0) {
  if (!soundEnabled || !audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const panner = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;

  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(volume * sfxVolume, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  osc.connect(gain);
  if (panner) {
    gain.connect(panner);
    panner.pan.setValueAtTime(pan, audioCtx.currentTime);
    panner.connect(audioCtx.destination);
  } else {
    gain.connect(audioCtx.destination);
  }

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playChord(freqs, duration, volume = 0.12) {
  if (!soundEnabled || !audioCtx) return;
  freqs.forEach((f, i) => {
    const pan = -0.3 + (i / (freqs.length - 1)) * 0.6;
    playTone(f, duration, 'sine', volume, pan);
  });
}

/* SFX */
function sfxClick() { playTone(600, 0.08, 'sine', 0.08, 0); setTimeout(() => playTone(800, 0.08, 'sine', 0.06, 0.2), 40); }
function sfxTick() { playTone(1400, 0.07, 'sine', 0.07, -0.2); }
function sfxUntick() { playTone(700, 0.07, 'sine', 0.05, 0.2); }
function sfxReset() { playTone(350, 0.12, 'triangle', 0.07, -0.3); setTimeout(() => playTone(280, 0.18, 'triangle', 0.05, 0.3), 80); }
function sfxError() { playTone(180, 0.18, 'sawtooth', 0.06, 0); }

function sfxDrawStart() {
  if (!soundEnabled || !audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(180, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.6);
  gain.gain.setValueAtTime(0.1 * sfxVolume, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.6);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.6);
}

function sfxDrawComplete() {
  playChord([523, 659, 784], 0.5, 0.14);
  setTimeout(() => playChord([659, 784, 1047], 0.7, 0.11), 180);
  setTimeout(() => playChord([523, 659, 784, 1047], 1.0, 0.09), 450);
}

function sfxCelebrate() {
  const notes = [523, 587, 659, 784, 880, 1047, 1175];
  notes.forEach((n, i) => setTimeout(() => playTone(n, 0.28, 'sine', 0.1, (i % 2 === 0 ? -0.4 : 0.4)), i * 70));
  setTimeout(() => playChord([523, 659, 784, 1047], 1.2, 0.13), notes.length * 70 + 120);
}

/* BGM — Melodic Sequence (not random) */
const bgmMelody = [
  { freqs: [261.63, 329.63, 392.00], duration: 2.0 },
  { freqs: [293.66, 349.23, 440.00], duration: 2.0 },
  { freqs: [329.63, 392.00, 493.88], duration: 2.0 },
  { freqs: [349.23, 440.00, 523.25], duration: 2.0 },
  { freqs: [392.00, 493.88, 587.33], duration: 2.0 },
  { freqs: [349.23, 440.00, 523.25], duration: 2.0 },
  { freqs: [329.63, 392.00, 493.88], duration: 2.0 },
  { freqs: [261.63, 329.63, 392.00], duration: 2.5 },
];

function playBGMChord() {
  if (!bgmEnabled || !audioCtx) return;
  const chord = bgmMelody[bgmSequenceIndex % bgmMelody.length];
  bgmSequenceIndex++;

  chord.freqs.forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const panner = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.022 * bgmVolume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + chord.duration);

    osc.connect(gain);
    if (panner) {
      const pan = -0.2 + (i / (chord.freqs.length - 1)) * 0.4;
      panner.pan.setValueAtTime(pan, audioCtx.currentTime);
      gain.connect(panner);
      panner.connect(audioCtx.destination);
    } else {
      gain.connect(audioCtx.destination);
    }

    osc.start();
    osc.stop(audioCtx.currentTime + chord.duration);
  });
}

/* ================================================================
   CURSOR GLOW EFFECT
   ================================================================ */

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

function initCursorGlow() {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

/* ================================================================
   SCROLL PROGRESS
   ================================================================ */

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressFill.style.width = percent + '%';
}

/* ================================================================
   TYPEWRITER EFFECT
   ================================================================ */

function typeWriter(element, text, speed = 35) {
  element.classList.add('typing');
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.remove('typing');
    }
  }
  type();
}

/* ================================================================
   MINI PARTICLE BURSTS (Task Checkbox)
   ================================================================ */

const miniCtx = miniParticlesCanvas.getContext('2d');
let miniParticles = [];

function resizeMiniCanvas() {
  miniParticlesCanvas.width = window.innerWidth;
  miniParticlesCanvas.height = window.innerHeight;
}
resizeMiniCanvas();
window.addEventListener('resize', resizeMiniCanvas);

function spawnMiniBurst(x, y) {
  if (reducedMotion) return;
  const colors = ['#5cb85c', '#4a90d9', '#f0ad4e', '#e74c3c', '#9b59b6'];
  for (let i = 0; i < 16; i++) {
    const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.5;
    const speed = Math.random() * 3 + 2;
    miniParticles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1.0,
      decay: Math.random() * 0.03 + 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2
    });
  }
}

function drawMiniParticles() {
  miniCtx.clearRect(0, 0, miniParticlesCanvas.width, miniParticlesCanvas.height);
  miniParticles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.08;
    p.life -= p.decay;

    if (p.life <= 0) {
      miniParticles.splice(i, 1);
      return;
    }

    miniCtx.globalAlpha = p.life;
    miniCtx.fillStyle = p.color;
    miniCtx.beginPath();
    miniCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
    miniCtx.fill();
  });
  miniCtx.globalAlpha = 1;

  if (miniParticles.length > 0) {
    requestAnimationFrame(drawMiniParticles);
  }
}

/* ================================================================
   THEME TOGGLE
   ================================================================ */

function toggleTheme() {
  sfxClick();
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeIcon.textContent = next === 'light' ? '🌙' : '☀️';
  showToast(next === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'success');
  if (next === 'dark') unlockAchievement('night_owl');
}

function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    themeIcon.textContent = saved === 'light' ? '🌙' : '☀️';
  }
}

/* ================================================================
   SOUND & BGM TOGGLES
   ================================================================ */

function toggleSound() {
  initAudio();
  soundEnabled = !soundEnabled;
  soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
  document.getElementById('soundBtn').classList.toggle('active', soundEnabled);
  if (soundEnabled) { sfxClick(); unlockAchievement('sound_on'); }
  showToast(soundEnabled ? 'Sound effects ON' : 'Sound effects OFF', 'success');
}

function toggleBGM() {
  initAudio();
  bgmEnabled = !bgmEnabled;
  bgmStatus.textContent = bgmEnabled ? 'ON' : 'OFF';
  document.getElementById('bgmBtn').classList.toggle('active', bgmEnabled);
  if (bgmEnabled) {
    soundEnabled = true;
    soundIcon.textContent = '🔊';
    document.getElementById('soundBtn').classList.add('active');
    playBGMChord();
    bgmInterval = setInterval(playBGMChord, 2200);
    showToast('Background music started', 'success');
    unlockAchievement('music_lover');
  } else {
    clearInterval(bgmInterval);
    bgmInterval = null;
    showToast('Background music stopped', 'success');
  }
}

function updateSfxVolume(val) {
  sfxVolume = val / 100;
  document.getElementById('sfxVolumeValue').textContent = val + '%';
  localStorage.setItem('sfxVolume', val);
}

function updateBgmVolume(val) {
  bgmVolume = val / 100;
  document.getElementById('bgmVolumeValue').textContent = val + '%';
  localStorage.setItem('bgmVolume', val);
}

/* ================================================================
   SETTINGS & PANELS
   ================================================================ */

function toggleSettings() {
  sfxClick();
  settingsPanel.classList.toggle('hidden');
  achievementsPanel.classList.add('hidden');
}

function toggleAchievements() {
  sfxClick();
  achievementsPanel.classList.toggle('hidden');
  settingsPanel.classList.add('hidden');
  if (!achievementsPanel.classList.contains('hidden')) renderAchievements();
}

function toggleReducedMotion() {
  sfxClick();
  reducedMotion = !reducedMotion;
  document.body.classList.toggle('reduced-motion', reducedMotion);
  document.getElementById('reducedMotionToggle').setAttribute('aria-pressed', reducedMotion);
  localStorage.setItem('reducedMotion', reducedMotion);
  showToast(reducedMotion ? 'Reduced motion enabled' : 'Reduced motion disabled', 'success');
}

/* ================================================================
   ACHIEVEMENTS SYSTEM
   ================================================================ */

function unlockAchievement(id) {
  if (achievements[id]) return;
  achievements[id] = { unlocked: true, time: Date.now() };
  localStorage.setItem('achievements', JSON.stringify(achievements));
  achieveDot.classList.remove('hidden');
  const def = achievementDefs.find(a => a.id === id);
  if (def) {
    showToast(`🏆 Achievement Unlocked: ${def.title}!`, 'success');
    sfxCelebrate();
  }
}

function renderAchievements() {
  achievementsBody.innerHTML = '';
  achievementDefs.forEach(def => {
    const unlocked = !!achievements[def.id];
    const item = document.createElement('div');
    item.className = `achievement-item ${unlocked ? 'unlocked' : 'locked'}`;
    item.innerHTML = `
      <div class="achievement-icon">${unlocked ? def.icon : '🔒'}</div>
      <div class="achievement-info">
        <h4>${def.title}</h4>
        <p>${def.desc}</p>
      </div>
    `;
    achievementsBody.appendChild(item);
  });
  achieveDot.classList.add('hidden');
}

function loadAchievements() {
  const saved = localStorage.getItem('achievements');
  if (saved) achievements = JSON.parse(saved);
}

/* ================================================================
   TOAST NOTIFICATIONS
   ================================================================ */

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ================================================================
   CONFETTI SYSTEM
   ================================================================ */

const confettiCtx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId = null;

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeConfetti();
window.addEventListener('resize', resizeConfetti);

function createConfetti() {
  const colors = ['#4a90d9', '#5cb85c', '#f0ad4e', '#e74c3c', '#9b59b6', '#1abc9c', '#3498db', '#ff6b6b', '#ffd700'];
  for (let i = 0; i < 200; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: Math.random() * 10 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3.5 + 1.5,
      angle: Math.random() * 360,
      spin: Math.random() * 6 - 3,
      sway: Math.random() * 1.5 - 0.75,
      shape: Math.random() > 0.5 ? 'circle' : 'rect'
    });
  }
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p, i) => {
    p.y += p.speed;
    p.x += Math.sin(p.angle * 0.015) * p.sway;
    p.angle += p.spin;
    const alpha = Math.max(0, 1 - p.y / confettiCanvas.height);

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.angle * Math.PI) / 180);
    confettiCtx.globalAlpha = alpha;
    confettiCtx.fillStyle = p.color;
    if (p.shape === 'circle') {
      confettiCtx.beginPath();
      confettiCtx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
      confettiCtx.fill();
    } else {
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    }
    confettiCtx.restore();

    if (p.y > confettiCanvas.height + 20) confettiParticles.splice(i, 1);
  });

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(drawConfetti);
  }
}

function launchConfetti() {
  if (reducedMotion) return;
  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  confettiParticles = [];
  createConfetti();
  drawConfetti();
  if (navigator.vibrate) navigator.vibrate([80, 40, 80, 40, 120]);
}

/* ================================================================
   FLOATING PARTICLES BACKGROUND
   ================================================================ */

function createBackgroundParticles() {
  const container = document.getElementById('particles');
  const colors = ['#4a90d9', '#5cb85c', '#f0ad4e', '#9b59b6'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = `${Math.random() * 15 + 10}s`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(p);
  }
}

/* ================================================================
   INTERSECTION OBSERVER (Scroll Animations)
   ================================================================ */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('section').forEach(section => observer.observe(section));
}

/* ================================================================
   3D CARD TILT EFFECT
   ================================================================ */

function initCardTilt() {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.task-card, .info-block, .step').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      } else {
        card.style.transform = '';
      }
    });
  });
}

/* ================================================================
   BACK TO TOP
   ================================================================ */

function handleScroll() {
  if (window.scrollY > 500) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
  updateScrollProgress();
}

function scrollToTop() {
  sfxClick();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================================================================
   KEYBOARD SHORTCUTS
   ================================================================ */

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  switch (e.key.toLowerCase()) {
    case ' ':
      e.preventDefault();
      drawCountry();
      break;
    case 'r':
      if (!challengeSection.classList.contains('hidden')) resetProgress();
      break;
    case 'p':
      if (!challengeSection.classList.contains('hidden')) printChallenge();
      break;
    case 'm':
      toggleBGM();
      break;
    case 's':
      toggleSound();
      break;
    case 't':
      toggleTheme();
      break;
    case 'escape':
      settingsPanel.classList.add('hidden');
      achievementsPanel.classList.add('hidden');
      document.getElementById('certModal').classList.add('hidden');
      break;
  }
});

/* ================================================================
   PAGE VISIBILITY API (Auto-pause BGM)
   ================================================================ */

document.addEventListener('visibilitychange', () => {
  if (document.hidden && bgmEnabled) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  } else if (!document.hidden && bgmEnabled) {
    playBGMChord();
    bgmInterval = setInterval(playBGMChord, 2200);
  }
});

/* ================================================================
   COPY & EXPORT
   ================================================================ */

function copyChallenge() {
  sfxClick();
  if (!currentCountry) return;
  let text = `🌍 ${currentCountry.name} Lifestyle Challenge\n\n`;
  text += `Background: ${currentCountry.background}\n`;
  text += `Focus: ${currentCountry.focus}\n`;
  text += `Identity Link: ${currentCountry.identity}\n\n`;
  text += `Daily Routine:\n`;
  currentCountry.tasks.forEach((t, i) => {
    const checked = document.getElementById(`task-${i}`)?.checked ? '✅' : '⬜';
    text += `${checked} ${t.time} — ${t.title}\n`;
    text += `   ${t.instruction}\n`;
    text += `   💡 ${t.meaning}\n\n`;
  });
  navigator.clipboard.writeText(text).then(() => {
    showToast('Challenge copied to clipboard!', 'success');
  }).catch(() => showToast('Failed to copy', 'error'));
}

function copyReflection() {
  sfxClick();
  const text = reflectionText.value.trim();
  if (!text) { showToast('Nothing to copy yet', 'error'); return; }
  navigator.clipboard.writeText(text).then(() => {
    showToast('Reflection copied!', 'success');
  }).catch(() => showToast('Failed to copy', 'error'));
}

function printChallenge() {
  sfxClick();
  window.print();
}

/* ================================================================
   CERTIFICATE
   ================================================================ */

function showCertificate() {
  sfxClick();
  if (!currentCountry) return;
  document.getElementById('certFlag').textContent = currentCountry.flag;
  document.getElementById('certCountryName').textContent = currentCountry.name;
  document.getElementById('certDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const savedName = localStorage.getItem('certName') || '';
  document.getElementById('certName').value = savedName;
  document.getElementById('certModal').classList.remove('hidden');
  unlockAchievement('cultural_scholar');
}

function closeCertificate() {
  sfxClick();
  const name = document.getElementById('certName').value.trim();
  if (name) localStorage.setItem('certName', name);
  document.getElementById('certModal').classList.add('hidden');
}

function downloadCertificate() {
  sfxClick();
  const name = document.getElementById('certName').value.trim();
  if (name) localStorage.setItem('certName', name);
  showToast('Use browser print (Ctrl+P / Cmd+P) to save as PDF!', 'success');
  window.print();
}

/* ================================================================
   ONBOARDING
   ================================================================ */

function dismissOnboarding() {
  sfxClick();
  onboarding.classList.add('hidden');
  localStorage.setItem('onboardingSeen', 'true');
}

function checkOnboarding() {
  if (!localStorage.getItem('onboardingSeen')) {
    setTimeout(() => onboarding.classList.remove('hidden'), 1500);
  }
}

/* ================================================================
   DRAW HISTORY
   ================================================================ */

function addToHistory(country) {
  if (!drawHistory.find(h => h.id === country.id)) {
    drawHistory.push({ id: country.id, name: country.name, flag: country.flag });
    localStorage.setItem('drawHistory', JSON.stringify(drawHistory));
  }
  renderHistory();
  const uniqueCount = drawHistory.length;
  if (uniqueCount >= 5) unlockAchievement('explorer');
  if (uniqueCount >= 12) unlockAchievement('globetrotter');
}

function renderHistory() {
  if (drawHistory.length === 0) {
    historyArea.classList.add('hidden');
    return;
  }
  historyArea.classList.remove('hidden');
  historyList.innerHTML = '';
  drawHistory.forEach(h => {
    const item = document.createElement('span');
    item.className = 'history-item';
    item.innerHTML = `<span class="hist-flag">${h.flag}</span> ${h.name}`;
    historyList.appendChild(item);
  });
}

function loadHistory() {
  const saved = localStorage.getItem('drawHistory');
  if (saved) {
    drawHistory = JSON.parse(saved);
    renderHistory();
  }
}

/* ================================================================
   RANDOM DRAW
   ================================================================ */

function drawCountry() {
  initAudio();
  sfxDrawStart();
  dismissOnboarding();

  currentCountry = null;
  hasReset = false;
  tasksContainer.innerHTML = '';
  reflectionText.value = '';
  resultSection.classList.add('hidden');
  challengeSection.classList.add('hidden');
  reflectionSection.classList.add('hidden');
  celebration.classList.add('hidden');
  drawBtn.classList.add('hidden');
  drawAgainBtn.classList.add('hidden');
  document.title = 'Random Country Lifestyle Challenge';

  spinnerRing.classList.add('spinning');
  spinnerGlow.classList.add('active');

  const cycleInterval = setInterval(() => {
    const random = countries[Math.floor(Math.random() * countries.length)];
    flagDisplay.textContent = random.flag;
    countryNameDisplay.textContent = random.name;
  }, 85);

  setTimeout(() => {
    clearInterval(cycleInterval);
    spinnerRing.classList.remove('spinning');
    spinnerGlow.classList.remove('active');

    const selected = countries[Math.floor(Math.random() * countries.length)];
    currentCountry = selected;
    flagDisplay.textContent = selected.flag;
    countryNameDisplay.textContent = selected.name;

    showCountryResult(selected);
    showTasks(selected);
    resultSection.classList.remove('hidden');
    challengeSection.classList.remove('hidden');
    reflectionSection.classList.remove('hidden');
    drawAgainBtn.classList.remove('hidden');

    sfxDrawComplete();
    showToast(`${selected.name} selected!`, 'success');
    document.title = `${selected.flag} ${selected.name} — Lifestyle Challenge`;

    unlockAchievement('first_draw');
    addToHistory(selected);
    saveState();

    setTimeout(() => {
      resultSection.classList.add('visible');
      challengeSection.classList.add('visible');
      reflectionSection.classList.add('visible');
      resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, 2200);
}

/* ================================================================
   SHOW COUNTRY RESULT
   ================================================================ */

function showCountryResult(country) {
  resultFlag.textContent = country.flag;
  resultCountryName.textContent = country.name;
  resultBackground.textContent = country.background;
  resultFocus.textContent = country.focus;
  resultIdentity.textContent = country.identity;
}

/* ================================================================
   SHOW TASKS
   ================================================================ */

function showTasks(country) {
  tasksContainer.innerHTML = '';
  celebration.classList.add('hidden');

  country.tasks.forEach((task, index) => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.id = `task-card-${index}`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    card.innerHTML = `
      <input type="checkbox" class="task-checkbox" id="task-${index}">
      <div class="task-content">
        <div class="task-time">${task.time}</div>
        <div class="task-title"><span class="task-emoji">${task.emoji}</span>${task.title}</div>
        <div class="task-instruction">${task.instruction}</div>
        <div class="task-meaning">${task.meaning}</div>
      </div>
    `;

    const checkbox = card.querySelector('.task-checkbox');
    checkbox.addEventListener('change', () => {
      const rect = checkbox.getBoundingClientRect();
      if (checkbox.checked) {
        sfxTick();
        spawnMiniBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
        if (miniParticles.length > 0 && miniParticles.length <= 16) drawMiniParticles();
      } else {
        sfxUntick();
      }
      updateProgress();
      saveState();
    });

    tasksContainer.appendChild(card);

    // Staggered entrance
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 80 * index);
  });

  updateProgress();
}

/* ================================================================
   UPDATE PROGRESS
   ================================================================ */

function updateProgress() {
  if (!currentCountry) return;

  const total = currentCountry.tasks.length;
  const checkboxes = document.querySelectorAll('.task-checkbox');
  let completed = 0;

  checkboxes.forEach((cb, index) => {
    const card = document.getElementById(`task-card-${index}`);
    if (cb.checked) {
      completed++;
      card.classList.add('completed');
    } else {
      card.classList.remove('completed');
    }
  });

  const percent = (completed / total) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${completed} / ${total} tasks completed (${Math.round(percent)}%)`;
  progressBar.setAttribute('aria-valuenow', Math.round(percent));

  if (completed === total && total > 0) {
    celebration.classList.remove('hidden');
    celebration.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    launchConfetti();
    sfxCelebrate();
    showToast('🎉 All tasks completed! Amazing work!', 'success');
    unlockAchievement('task_master');
    if (!hasReset) unlockAchievement('perfect_day');
  } else {
    celebration.classList.add('hidden');
  }
}

/* ================================================================
   RESET PROGRESS
   ================================================================ */

function resetProgress() {
  sfxReset();
  hasReset = true;
  const checkboxes = document.querySelectorAll('.task-checkbox');
  checkboxes.forEach((cb, index) => {
    cb.checked = false;
    const card = document.getElementById(`task-card-${index}`);
    if (card) card.classList.remove('completed');
  });
  updateProgress();
  saveState();
  showToast('Progress reset', 'success');
}

/* ================================================================
   LOCALSTORAGE PERSISTENCE
   ================================================================ */

function saveState() {
  if (!currentCountry) {
    localStorage.removeItem('challengeState');
    return;
  }
  const checkboxes = document.querySelectorAll('.task-checkbox');
  const checked = Array.from(checkboxes).map(cb => cb.checked);
  const state = {
    countryId: currentCountry.id,
    tasksChecked: checked,
    reflection: reflectionText.value,
    timestamp: Date.now()
  };
  localStorage.setItem('challengeState', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('challengeState');
  if (!saved) return;

  try {
    const state = JSON.parse(saved);
    const country = countries.find(c => c.id === state.countryId);
    if (!country) return;

    const savedDate = new Date(state.timestamp).toDateString();
    const today = new Date().toDateString();
    if (savedDate !== today) {
      localStorage.removeItem('challengeState');
      return;
    }

    currentCountry = country;
    flagDisplay.textContent = country.flag;
    countryNameDisplay.textContent = country.name;

    showCountryResult(country);
    showTasks(country);

    state.tasksChecked.forEach((checked, i) => {
      const cb = document.getElementById(`task-${i}`);
      if (cb) cb.checked = checked;
    });

    reflectionText.value = state.reflection || '';

    resultSection.classList.remove('hidden');
    challengeSection.classList.remove('hidden');
    reflectionSection.classList.remove('hidden');
    drawAgainBtn.classList.remove('hidden');
    drawBtn.classList.add('hidden');

    document.title = `${country.flag} ${country.name} — Lifestyle Challenge`;
    updateProgress();
    showToast('Restored your previous challenge!', 'success');
  } catch (e) {
    localStorage.removeItem('challengeState');
  }
}

/* ================================================================
   REFLECTION AUTO-SAVE
   ================================================================ */

reflectionText.addEventListener('input', () => {
  if (reflectionText.value.trim().length > 20) {
    unlockAchievement('deep_thinker');
  }
  saveState();
});

/* ================================================================
   INITIALIZATION
   ================================================================ */

window.addEventListener('DOMContentLoaded', () => {
  // Page loader
  setTimeout(() => {
    pageLoader.classList.add('hidden');
  }, 1800);

  loadTheme();
  loadAchievements();
  loadHistory();
  createBackgroundParticles();
  initScrollAnimations();
  initCursorGlow();
  initCardTilt();
  window.addEventListener('scroll', handleScroll);

  // Typewriter effect for research question
  const rqText = 'How do different countries\' daily routines, cultural habits and social behaviours shape people\'s identity and influence the way they interact with others?';
  setTimeout(() => {
    typeWriter(document.getElementById('typewriterText'), rqText, 30);
  }, 2000);

  // Load volume settings
  const savedSfxVol = localStorage.getItem('sfxVolume');
  if (savedSfxVol !== null) {
    sfxVolume = savedSfxVol / 100;
    document.getElementById('sfxVolume').value = savedSfxVol;
    document.getElementById('sfxVolumeValue').textContent = savedSfxVol + '%';
  }
  const savedBgmVol = localStorage.getItem('bgmVolume');
  if (savedBgmVol !== null) {
    bgmVolume = savedBgmVol / 100;
    document.getElementById('bgmVolume').value = savedBgmVol;
    document.getElementById('bgmVolumeValue').textContent = savedBgmVol + '%';
  }

  // Load reduced motion
  const savedReduced = localStorage.getItem('reducedMotion');
  if (savedReduced === 'true') {
    reducedMotion = true;
    document.body.classList.add('reduced-motion');
    document.getElementById('reducedMotionToggle').setAttribute('aria-pressed', 'true');
  }

  // Make initial sections visible
  document.getElementById('intro').classList.add('visible');
  document.getElementById('howItWorks').classList.add('visible');
  document.getElementById('drawSection').classList.add('visible');

  // Onboarding
  setTimeout(checkOnboarding, 2500);

  // Restore previous challenge
  setTimeout(loadState, 500);
});
