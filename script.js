/* ================================================================
   RANDOM COUNTRY LIFESTYLE CHALLENGE — MAXIMUM EDITION
   UI/UX/SFX/BGM Fully Optimized. User Experience Priority.
   ================================================================ */

/* ========== Country Data (20 Countries, 8-10 Detailed Tasks Each) ========== */
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
      { time: '6:30 AM', title: 'Morning Stretch or Light Exercise', emoji: '🌅', instruction: 'Start the day with gentle stretching, tai chi movements or a short walk outside to wake up your body and mind.', meaning: 'Morning movement can reflect the cultural value placed on balance, health and preparing mindfully for the day ahead.' },
      { time: '7:30 AM', title: 'Warm Family Breakfast', emoji: '🥟', instruction: 'Eat a warm breakfast such as baozi, congee, noodles or soy milk. Sit with family if possible and ask about their plans for the day.', meaning: 'A warm shared breakfast can reinforce family bonds and the importance of beginning the day together with care.' },
      { time: '8:30 AM', title: 'Greeting Elders or Teachers', emoji: '🙏', instruction: 'Greet teachers, parents or elders politely. Use respectful words, attentive posture, and ask if they need any help today.', meaning: 'Respectful greetings may reinforce social harmony and the importance of intergenerational relationships in daily life.' },
      { time: '12:00 PM', title: 'Shared Lunch with Others', emoji: '🍜', instruction: 'Eat lunch together with family, classmates or friends. Share dishes from common plates and offer food to others before serving yourself.', meaning: 'Sharing food can strengthen group bonds, teach generosity and create a sense of community belonging.' },
      { time: '2:00 PM', title: 'Focused Study or Skill Practice', emoji: '📚', instruction: 'Spend at least 30 minutes studying, reading or practising a skill you want to improve. Put your phone away and concentrate fully.', meaning: 'Dedicated effort towards learning can reflect the cultural value placed on self-improvement, persistence and responsibility.' },
      { time: '4:00 PM', title: 'Help with a Family Task', emoji: '🏠', instruction: 'Assist a family member with a household chore such as cooking, cleaning or organising — without being asked first.', meaning: 'Helping family without being asked may reinforce responsibility, care and the collective nature of home life.' },
      { time: '6:30 PM', title: 'Family Dinner Together', emoji: '🥘', instruction: 'Eat dinner with your family at the table. Discuss what everyone did today and listen actively to each person’s stories.', meaning: 'Shared evening meals can strengthen family identity and create space for mutual support and understanding.' },
      { time: '8:00 PM', title: 'Evening Reflection', emoji: '🌙', instruction: 'Write down or think about one thing you learned today, one way you showed respect, and one thing you are grateful for.', meaning: 'Daily reflection can strengthen awareness of how small actions connect to personal values, relationships and growth.' },
      { time: '9:30 PM', title: 'Prepare for Tomorrow', emoji: '📋', instruction: 'Pack your bag, lay out your clothes or tidy your study space before bed. Prepare everything you need for the next morning.', meaning: 'Evening preparation can reflect discipline, respect for tomorrow’s responsibilities and care for your future self.' }
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
      { time: '6:30 AM', title: 'Rise and Tidy Your Space', emoji: '🌅', instruction: 'Make your bed, open the curtains to let in natural light, and tidy any clothes or items left out from the night before.', meaning: 'Starting the day with a clean space can reflect mindfulness, self-discipline and respect for your surroundings.' },
      { time: '7:30 AM', title: 'Balanced Breakfast', emoji: '🍚', instruction: 'Prepare a balanced breakfast such as rice, miso soup, egg or fruit. Eat mindfully without looking at screens.', meaning: 'A thoughtful morning meal can reflect the value placed on balance, health and mindful preparation.' },
      { time: '8:30 AM', title: 'Prepare Carefully and Be On Time', emoji: '⏰', instruction: 'Organise your belongings the night before or early in the morning. Leave early so you arrive on time or slightly early.', meaning: 'Punctuality and preparation may show respect for others’ time and reflect personal reliability.' },
      { time: '10:00 AM', title: 'Polite Communication', emoji: '🎧', instruction: 'In every conversation today, listen fully before responding. Use polite language and avoid interrupting others.', meaning: 'Polite communication may strengthen social harmony, mutual respect and deeper understanding in relationships.' },
      { time: '12:30 PM', title: 'Clean After Eating', emoji: '🧹', instruction: 'After lunch, clean your eating space thoroughly. Wipe the table, dispose of waste properly and return any shared items to their place.', meaning: 'Cleaning up after oneself can reflect consideration for shared spaces and communal responsibility.' },
      { time: '3:00 PM', title: 'Quiet Focus Time', emoji: '📖', instruction: 'Spend 30 minutes studying, reading or working on a personal goal in a quiet space without music or phone notifications.', meaning: 'Focused quiet time can encourage self-discipline, concentration and personal growth through deliberate practice.' },
      { time: '5:30 PM', title: 'Mindful Walk or Nature Time', emoji: '🌳', instruction: 'Take a short walk outside. Observe the trees, sky or sounds around you without using your phone.', meaning: 'Being present in nature can encourage calm awareness and appreciation for simple, everyday beauty.' },
      { time: '7:00 PM', title: 'Help Prepare Dinner', emoji: '🍱', instruction: 'Help set the table, wash vegetables or assist with simple cooking tasks for the evening meal.', meaning: 'Contributing to meal preparation can reinforce family cooperation and gratitude for shared effort.' },
      { time: '9:00 PM', title: 'Reflect on Awareness', emoji: '🤔', instruction: 'Think about one moment today when you considered someone else’s feelings or needs before your own.', meaning: 'Reflecting on awareness of others can reinforce empathy, social connection and a harmonious mindset.' }
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
      { time: '6:30 AM', title: 'Morning Prayer or Quiet Moment', emoji: '🪔', instruction: 'Begin the day with a few minutes of prayer, meditation or quiet reflection. Light a candle or simply sit in silence.', meaning: 'Morning spiritual practice can centre the mind and connect personal values to daily actions.' },
      { time: '7:30 AM', title: 'Traditional Breakfast', emoji: '🫓', instruction: 'Enjoy a traditional-style breakfast such as dosa, idli, paratha or fresh fruit. Eat with family if possible.', meaning: 'Traditional food can connect people to heritage, family memory and cultural identity through shared taste.' },
      { time: '8:30 AM', title: 'Respectful Family Greeting', emoji: '🙏', instruction: 'Greet family members respectfully, perhaps with a namaste or warm words to elders. Ask for their blessings or advice.', meaning: 'Respectful greetings may reinforce family bonds, intergenerational care and the value of elder wisdom.' },
      { time: '11:00 AM', title: 'Community Check-In', emoji: '🤝', instruction: 'Call, message or speak to a neighbour or family friend. Ask how they are doing and offer help if they need anything.', meaning: 'Checking in with community members can strengthen mutual support networks and social belonging.' },
      { time: '1:00 PM', title: 'Shared Meal with Variety', emoji: '🍛', instruction: 'Eat a meal with rice or bread and a variety of dishes. Share food with others and wait for elders to begin eating first.', meaning: 'Shared meals with variety can reflect hospitality, generosity and the cultural importance of communal dining.' },
      { time: '3:30 PM', title: 'Learn from Elders', emoji: '📖', instruction: 'Ask a parent, grandparent or elder to teach you a story, recipe, song or skill from their experience.', meaning: 'Learning from elders can preserve cultural memory and strengthen intergenerational connection.' },
      { time: '5:30 PM', title: 'Tea Time with Family', emoji: '🍵', instruction: 'Sit with family for tea and snacks. Talk about your day and listen to what others experienced.', meaning: 'Afternoon tea time can create regular space for family dialogue and emotional closeness.' },
      { time: '7:30 PM', title: 'Reflect on Values', emoji: '💭', instruction: 'Think about one value your family or community holds dear — such as honesty, kindness or hard work — and how it guides daily life.', meaning: 'Reflection on values can help individuals understand how culture shapes moral identity and decision-making.' },
      { time: '9:00 PM', title: 'Evening Gratitude', emoji: '💐', instruction: 'Express gratitude to someone in your family or community. Thank them for something specific they did today or in the past.', meaning: 'Gratitude may reinforce positive relationships, appreciation and a deep sense of belonging.' }
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
      { time: '7:30 AM', title: 'Local Breakfast', emoji: '🍞', instruction: 'Try a local-style breakfast such as kaya toast, soft-boiled eggs or noodles. Notice the mix of flavours from different cultures.', meaning: 'Local food can reflect the blending of cultures and shared culinary heritage that defines multicultural identity.' },
      { time: '8:30 AM', title: 'Respectful Morning Greeting', emoji: '👋', instruction: 'Greet people from different backgrounds warmly. Use their preferred greeting style and show genuine interest in their day.', meaning: 'Respectful morning interaction may set a tone of inclusion and mutual respect across cultural differences.' },
      { time: '10:30 AM', title: 'Observe Public Courtesy', emoji: '🚇', instruction: 'Be extra mindful of public courtesy today: queue properly, keep shared spaces clean, and offer your seat to someone who needs it.', meaning: 'Public courtesy can reflect responsibility for collective wellbeing and social harmony in shared spaces.' },
      { time: '12:30 PM', title: 'Try Food from Another Culture', emoji: '🥡', instruction: 'At lunch, eat a dish from a culture different from your own. Learn one fact about where that dish comes from.', meaning: 'Food exploration can encourage openness, curiosity and appreciation for cultural diversity.' },
      { time: '2:30 PM', title: 'Cross-Cultural Conversation', emoji: '💬', instruction: 'Have a conversation with someone from a different cultural background. Ask about a tradition or custom they enjoy.', meaning: 'Cross-cultural dialogue may build empathy, break down barriers and strengthen social cohesion.' },
      { time: '4:30 PM', title: 'Help Keep Spaces Clean', emoji: '🧹', instruction: 'Pick up a piece of litter, wipe a shared table, or tidy a common area without being asked.', meaning: 'Caring for shared spaces can reflect collective responsibility and pride in the community environment.' },
      { time: '6:30 PM', title: 'Social Time in a Hawker Centre or Park', emoji: '🏙️', instruction: 'Spend time with friends or family in a hawker centre, food court, mall or park. Enjoy the mix of people around you.', meaning: 'Shared social spaces may foster community bonds and natural multicultural interaction in daily life.' },
      { time: '8:30 PM', title: 'Reflect on Diversity', emoji: '🌏', instruction: 'Think about one thing you learned today from interacting with a different culture or perspective. How did it broaden your thinking?', meaning: 'Reflection on diversity can build empathy, challenge assumptions and broaden personal identity.' }
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
      { time: '7:00 AM', title: 'Morning Wash and Prepare', emoji: '🌅', instruction: 'Wash your face, brush your teeth and dress neatly before breakfast. Present yourself with care for the day ahead.', meaning: 'Morning grooming can reflect self-respect and the cultural value of presenting oneself thoughtfully to others.' },
      { time: '7:30 AM', title: 'Korean-Style Breakfast', emoji: '🍲', instruction: 'Have a breakfast with rice, soup, egg or fruit. Eat at the table with family rather than on the go.', meaning: 'A structured breakfast can reflect discipline and the importance of starting the day with family care.' },
      { time: '8:30 AM', title: 'Use Polite Language', emoji: '🗣️', instruction: 'Use polite language and respectful posture when speaking with older people or teachers today. Bow slightly when greeting.', meaning: 'Polite speech and posture may reflect awareness of social roles and deep respect for hierarchy and experience.' },
      { time: '10:30 AM', title: 'Group Study or Collaborative Work', emoji: '✏️', instruction: 'Study or work alongside classmates or colleagues. Share notes, explain concepts to each other, or solve problems together.', meaning: 'Group effort can reflect the cultural value of collective success and mutual support in learning.' },
      { time: '12:30 PM', title: 'Share Side Dishes', emoji: '🥢', instruction: 'During lunch, share side dishes with others. Offer food before taking for yourself and thank the person who prepared the meal.', meaning: 'Food sharing can reinforce group belonging, generosity and mutual care in relationships.' },
      { time: '3:00 PM', title: 'Focused Individual Study', emoji: '📚', instruction: 'Spend 45 minutes in focused study or skill practice. Turn off distractions and push through difficulty without giving up.', meaning: 'Concentrated effort can reflect cultural values of perseverance, diligence and self-improvement.' },
      { time: '5:30 PM', title: 'Physical Activity or Walk', emoji: '🏃', instruction: 'Go for a walk, do light exercise or stretch. Take care of your physical health as part of daily discipline.', meaning: 'Physical care can reflect the belief that a healthy body supports a focused mind and strong work ethic.' },
      { time: '7:00 PM', title: 'Family Dinner and Update', emoji: '💬', instruction: 'Have dinner with family and share one success and one challenge from your day. Listen to everyone else’s updates too.', meaning: 'Sharing daily experiences may strengthen family bonds and create a support system for growth.' },
      { time: '9:00 PM', title: 'Reflect on Group and Self', emoji: '🧘', instruction: 'Think about how your actions today affected your group, family or class. Did you contribute positively? What could you improve?', meaning: 'Reflecting on group impact can encourage awareness of interdependence and responsibility to others.' }
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
      { time: '6:30 AM', title: 'Morning Offering or Gratitude', emoji: '🌸', instruction: 'Before breakfast, take a moment to give thanks for your food, your family and your home. You can offer water to a plant or simply smile.', meaning: 'Morning gratitude can cultivate mindfulness and appreciation for simple daily blessings.' },
      { time: '7:30 AM', title: 'Respectful Morning Greeting', emoji: '🙏', instruction: 'Greet family or elders with a respectful wai — palms together, slight bow — or a warm smile and kind words.', meaning: 'Respectful morning greetings may set a positive tone and reinforce care for family relationships.' },
      { time: '8:30 AM', title: 'Hearty Breakfast', emoji: '🍜', instruction: 'Eat a warm breakfast such as rice porridge, noodles or sticky rice with fruit. Eat slowly and savour each bite.', meaning: 'A warm, nourishing breakfast can reflect the cultural importance of starting the day with energy and mindful care.' },
      { time: '11:00 AM', title: 'Small Act of Kindness', emoji: '💚', instruction: 'Do one small kind act: help a classmate carry something, compliment someone sincerely, or share a snack.', meaning: 'Small acts of kindness may reinforce compassion, positive social connections and community harmony.' },
      { time: '1:00 PM', title: 'Shared Meal with Others', emoji: '🍛', instruction: 'Eat lunch together with family, friends or classmates. Share dishes from communal plates and encourage others to try everything.', meaning: 'Sharing food can strengthen social bonds and reflect the value of communal dining and generosity.' },
      { time: '3:30 PM', title: 'Mindful Break', emoji: '🧘', instruction: 'Sit quietly for five minutes. Close your eyes, breathe slowly, and let go of any stress or frustration from the day.', meaning: 'Mindful breaks can encourage inner calm, patience and awareness of one’s emotional state.' },
      { time: '5:30 PM', title: 'Market or Neighbourhood Walk', emoji: '🏮', instruction: 'Walk through your neighbourhood, a local market or a park. Greet shopkeepers or neighbours you pass.', meaning: 'Being in communal spaces can foster a sense of belonging, social connection and appreciation for local life.' },
      { time: '7:00 PM', title: 'Help Prepare or Clean Up Dinner', emoji: '🍲', instruction: 'Help wash vegetables, set the table, or clean up after the evening meal without being asked.', meaning: 'Contributing to family meals can reinforce responsibility, care and the joy of shared effort.' },
      { time: '8:30 PM', title: 'Evening Mindfulness', emoji: '🌙', instruction: 'Take a few minutes to sit quietly, breathe deeply, and reflect on one thing you are grateful for and one kind thing you did today.', meaning: 'Mindful reflection can encourage awareness of daily blessings, kindness given and inner peace.' }
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
      { time: '7:30 AM', title: 'Leisurely Morning Routine', emoji: '☕', instruction: 'Wake up without rushing. Enjoy a light breakfast of bread, croissant, butter, jam or hot chocolate at the table.', meaning: 'A slow morning can reflect an appreciation for comfort, daily rhythm and starting the day with pleasure.' },
      { time: '8:30 AM', title: 'Say "Bonjour" to Everyone', emoji: '👋', instruction: 'Greet shopkeepers, teachers, classmates and neighbours with "Bonjour" and a friendly look when entering any space.', meaning: 'A warm greeting may reflect the cultural importance of acknowledging others and building polite social bonds.' },
      { time: '10:00 AM', title: 'Express an Opinion', emoji: '💭', instruction: 'In a class discussion or conversation with friends, share your honest opinion on a topic. Support your view with reasons.', meaning: 'Expressing opinions openly can encourage self-confidence, critical thinking and authentic personal identity.' },
      { time: '12:30 PM', title: 'Long Lunch Without Screens', emoji: '🍽️', instruction: 'Sit down for lunch without your phone. Enjoy the flavours, textures and colours of your meal. Talk with others if possible.', meaning: 'Taking time to eat mindfully can reflect an appreciation for daily life and presence in the moment.' },
      { time: '3:00 PM', title: 'Coffee or Tea with a Friend', emoji: '☕', instruction: 'Meet a friend, classmate or family member for a drink. Talk about your day, your interests or something that made you laugh.', meaning: 'Conversation over drinks can strengthen social connections and build confidence in expressing yourself.' },
      { time: '5:00 PM', title: 'Walk and Observe', emoji: '🚶', instruction: 'Take a walk around your neighbourhood or a nearby park. Notice the architecture, the trees, the people and the atmosphere.', meaning: 'Walking and observing can cultivate curiosity about surroundings and appreciation for everyday beauty.' },
      { time: '7:30 PM', title: 'Family or Friend Dinner', emoji: '🍷', instruction: 'Have dinner with family or friends. Engage in meaningful conversation about ideas, events or personal experiences during the meal.', meaning: 'Shared evening meals with dialogue may reinforce social bonds, intellectual exchange and the value of togetherness.' },
      { time: '9:00 PM', title: 'Evening Expression', emoji: '✍️', instruction: 'Write down or share one observation, opinion or creative thought about something you experienced today. Be honest and specific.', meaning: 'Expressing thoughts openly can encourage self-awareness, personal identity development and communication skill.' }
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
      { time: '7:30 AM', title: 'Slow Morning Start', emoji: '☕', instruction: 'Begin the day calmly. Make a coffee or hot drink and eat a simple breakfast of bread, pastry or fruit without hurrying.', meaning: 'A slow morning can reflect the value of easing into the day with simple pleasures and self-care.' },
      { time: '8:30 AM', title: 'Warm Greeting with Eye Contact', emoji: '🤗', instruction: 'Greet people warmly when you meet them. Use eye contact, a genuine smile and a friendly word or gesture.', meaning: 'Warm greetings with presence may build social trust and convey openness and sincerity in relationships.' },
      { time: '10:30 AM', title: 'Market or Shop Visit', emoji: '🍅', instruction: 'Visit a local shop, market or bakery. Choose fresh ingredients for a meal and chat with the person serving you.', meaning: 'Shopping locally can reflect appreciation for fresh food, community connection and personal relationships with vendors.' },
      { time: '1:00 PM', title: 'Enjoy Lunch Slowly', emoji: '🍝', instruction: 'Take your time eating lunch — at least 30 minutes. Focus on the flavours, the people around you and the conversation.', meaning: 'A leisurely meal can reflect the value of presence, enjoyment and social connection in daily life.' },
      { time: '3:30 PM', title: 'Afternoon Rest or Quiet Time', emoji: '😌', instruction: 'Take 20 minutes to rest, read, or simply sit quietly. Allow yourself to pause in the middle of the day.', meaning: 'Afternoon rest can reflect balance, self-care and the understanding that productivity includes renewal.' },
      { time: '5:30 PM', title: 'Passagiata — Evening Stroll', emoji: '🏛️', instruction: 'Walk through your neighbourhood, a public square or a park. Greet people you pass and enjoy the evening air.', meaning: 'An evening stroll can strengthen community belonging, social connection and appreciation for shared public life.' },
      { time: '7:30 PM', title: 'Cook and Eat Together', emoji: '🍕', instruction: 'Help prepare dinner with family and eat together at the table. Talk about your day, your dreams and your worries.', meaning: 'Cooking and eating together may reinforce family closeness, cooperation and the tradition of shared meals.' },
      { time: '9:00 PM', title: 'Evening Walk or Relaxation', emoji: '🌆', instruction: 'Take a relaxed evening walk or sit outside to unwind. Reflect on the good moments of your day.', meaning: 'A slower evening rhythm can encourage reflection, gratitude and balance between activity and rest.' }
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
      { time: '8:00 AM', title: 'Light Breakfast with Family', emoji: '🥖', instruction: 'Have a light breakfast such as toast with tomato, a pastry, fruit or a hot drink. Sit with family and chat.', meaning: 'A simple breakfast with family can reflect the value of easing into the day with connection and simple pleasures.' },
      { time: '9:30 AM', title: 'Warm Social Greeting', emoji: '🤗', instruction: 'Greet people you meet with warmth — use a smile, eye contact, a friendly word or even a light touch on the arm.', meaning: 'Warm greetings may build trust and reflect the cultural value of personal connection and emotional expressiveness.' },
      { time: '11:00 AM', title: 'Mid-Morning Social Break', emoji: '☕', instruction: 'Take a short break to have a drink or snack with a friend, classmate or colleague. Talk about non-work topics.', meaning: 'Social breaks can reinforce relationships and remind people that connection matters as much as productivity.' },
      { time: '2:30 PM', title: 'Long Lunch with Conversation', emoji: '🥘', instruction: 'Eat a relaxed lunch with family or friends for at least 45 minutes. Enjoy the food and talk without rushing.', meaning: 'A leisurely shared meal can strengthen bonds, deepen conversation and reflect appreciation for social time.' },
      { time: '4:30 PM', title: 'Siesta or Quiet Rest', emoji: '😴', instruction: 'Take 20-30 minutes to rest, nap, read or relax quietly. Allow your body and mind to recharge.', meaning: 'Afternoon rest can reflect wisdom about balance, health and the value of slowing down in a busy day.' },
      { time: '6:00 PM', title: 'Snack and Social Time', emoji: '🍪', instruction: 'Have an afternoon snack with friends or family. Share something sweet and talk about your plans for the evening.', meaning: 'Shared snacks can maintain social connection throughout the day and create small rituals of togetherness.' },
      { time: '8:00 PM', title: 'Evening Stroll', emoji: '🌇', instruction: 'Take a relaxed evening walk in your neighbourhood or a nearby park. Greet neighbours and enjoy the atmosphere.', meaning: 'An evening stroll can encourage reflection, connection with surroundings and casual social interaction.' },
      { time: '9:30 PM', title: 'Late Dinner and Storytelling', emoji: '💬', instruction: 'Eat dinner late with family and share stories, jokes or thoughts about your day before resting.', meaning: 'Evening conversation over dinner may reinforce family closeness and the value of shared daily life.' }
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
      { time: '6:30 AM', title: 'Early Rise and Plan', emoji: '🌅', instruction: 'Wake up at a consistent time and review your schedule for the day. Prepare what you need before leaving.', meaning: 'Early planning can reflect discipline, reliability and respect for your own time and commitments.' },
      { time: '7:30 AM', title: 'Hearty Structured Breakfast', emoji: '🥨', instruction: 'Eat a structured breakfast with bread, cheese, fruit or yoghurt and a hot drink. Sit at the table without screens.', meaning: 'A structured morning meal can reflect discipline and the value of starting the day with nourishment and focus.' },
      { time: '8:30 AM', title: 'Be Punctual and Prepared', emoji: '⏰', instruction: 'Arrive on time or slightly early for class, meetings or appointments. Bring everything you need.', meaning: 'Punctuality may show respect for others’ time and reflect organisational values and personal reliability.' },
      { time: '10:30 AM', title: 'Focused Work Block', emoji: '✏️', instruction: 'Work or study for 45 minutes without interruption. Turn off notifications and focus completely on one task.', meaning: 'Focused work can reflect efficiency, self-discipline and the value of doing one thing well at a time.' },
      { time: '12:30 PM', title: 'Recycle and Dispose Properly', emoji: '♻️', instruction: 'Sort your waste into recycling, compost and general bins after eating. Rinse containers before recycling.', meaning: 'Proper waste sorting can reflect environmental responsibility and care for shared community spaces.' },
      { time: '3:00 PM', title: 'Direct and Honest Conversation', emoji: '🗣️', instruction: 'In a conversation today, express your thoughts clearly and politely. Avoid vague language and say what you mean.', meaning: 'Direct yet respectful communication may build trust, clarity and mutual understanding in relationships.' },
      { time: '5:30 PM', title: 'Outdoor Activity or Walk', emoji: '🌳', instruction: 'Spend at least 30 minutes outside walking, cycling or enjoying nature in a park, forest or green space.', meaning: 'Outdoor activity can reflect appreciation for nature, physical wellbeing and balance between work and rest.' },
      { time: '7:00 PM', title: 'Cook a Simple Meal', emoji: '🍲', instruction: 'Prepare a simple, healthy dinner from fresh ingredients. Eat at the table and clean up immediately after.', meaning: 'Cooking and cleaning promptly can reflect self-reliance, orderliness and care for your living space.' },
      { time: '8:30 PM', title: 'Plan and Reflect', emoji: '📋', instruction: 'Think about one thing you accomplished today, one challenge you faced, and one thing you plan to do tomorrow.', meaning: 'Reflection and planning may encourage self-discipline, purposeful living and continuous improvement.' }
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
      { time: '7:00 AM', title: 'Slow Morning with Natural Light', emoji: '🌲', instruction: 'Open your curtains wide, breathe in fresh air from a window, and start the day calmly without rushing.', meaning: 'Connecting with natural light and air can reflect appreciation for nature and a balanced start to the day.' },
      { time: '8:00 AM', title: 'Fika-Style Break', emoji: '☕', instruction: 'Take a calm morning moment with a warm drink and a small snack. If possible, share this break with someone else.', meaning: 'A mindful break can reflect the value of slowing down, enjoying simple pleasures and connecting with others.' },
      { time: '9:30 AM', title: 'Respect Personal Space', emoji: '🤝', instruction: 'Be mindful of others’ personal space and quiet needs in shared areas today. Do not speak loudly in quiet places.', meaning: 'Respecting boundaries may reflect awareness of others, social consideration and respect for collective comfort.' },
      { time: '11:30 AM', title: 'Collaborative Discussion', emoji: '💬', instruction: 'In a group discussion, listen to all voices equally. Seek agreement and compromise rather than dominating the conversation.', meaning: 'Consensus-seeking may reinforce equality, mutual respect and the idea that everyone’s opinion has value.' },
      { time: '12:30 PM', title: 'Outdoor Lunch Break', emoji: '🌞', instruction: 'Eat lunch outside or near a window with natural light and fresh air. Leave your phone in your pocket.', meaning: 'Connecting with nature during the day can support wellbeing, balance and appreciation for the environment.' },
      { time: '3:00 PM', title: 'Second Fika Break', emoji: '🍪', instruction: 'Take another short break with a drink and snack. Chat with a colleague, classmate or friend about something non-work related.', meaning: 'Regular social breaks can maintain relationships and reflect the belief that rest is essential to productivity.' },
      { time: '5:00 PM', title: 'Nature Walk', emoji: '🚶', instruction: 'Take a walk in a park, forest path or near water. Observe the natural world around you without headphones.', meaning: 'Time in nature can encourage reflection, calm and deep appreciation for the environment.' },
      { time: '7:00 PM', title: 'Simple Home-Cooked Dinner', emoji: '🍲', instruction: 'Cook a simple, healthy dinner with fresh ingredients. Eat with family or housemates and discuss your day.', meaning: 'Simple home cooking can reflect self-sufficiency, health consciousness and the value of shared domestic life.' },
      { time: '8:30 PM', title: 'Evening Reflection on Balance', emoji: '🌙', instruction: 'Reflect on how you balanced work, rest, social time and personal time today. What felt good? What would you change?', meaning: 'Reflection on balance can encourage healthier habits, self-awareness and sustainable daily rhythms.' }
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
      { time: '6:30 AM', title: 'Dawn Prayer or Quiet Reflection', emoji: '🌅', instruction: 'Begin the day with a few minutes of prayer, gratitude or quiet reflection before the household wakes fully.', meaning: 'Morning spiritual practice can centre the soul and connect daily life to deeper values and purpose.' },
      { time: '7:30 AM', title: 'Warm Family Breakfast', emoji: '🍞', instruction: 'Eat breakfast with family — perhaps bread, cheese, olives or pastries. Ask how everyone slept and what they hope to do today.', meaning: 'A shared breakfast can reinforce family connection, emotional warmth and daily mutual care.' },
      { time: '8:30 AM', title: 'Greet Everyone with Warmth', emoji: '☀️', instruction: 'Greet every family member, neighbour or shopkeeper you see with warmth, eye contact and genuine interest.', meaning: 'Warm daily greetings may reflect the cultural importance of personal connection and community goodwill.' },
      { time: '10:30 AM', title: 'Mint Tea Ritual', emoji: '🍵', instruction: 'Prepare and share mint tea with a family member, friend or guest. Pour from high above the glass and serve with care.', meaning: 'The tea ritual can reflect hospitality, patience, artistry and respect for those you share it with.' },
      { time: '1:00 PM', title: 'Shared Communal Meal', emoji: '🍲', instruction: 'Eat a shared meal from a communal dish with family or friends. Use bread to scoop food and encourage others to eat their fill first.', meaning: 'Communal eating can strengthen bonds, reflect generosity and embody shared cultural identity.' },
      { time: '3:30 PM', title: 'Rest or Quiet Time', emoji: '😌', instruction: 'Take a mid-afternoon rest. Read, nap, or sit quietly to escape the heat and recharge your energy.', meaning: 'Afternoon rest can reflect wisdom about pacing, health and adapting daily rhythm to natural conditions.' },
      { time: '5:00 PM', title: 'Community Check-In', emoji: '🤝', instruction: 'Visit, call or check in on a neighbour, relative or elderly person in your community. Ask if they need anything.', meaning: 'Checking in with others may reinforce community support, empathy and the extended family spirit.' },
      { time: '7:00 PM', title: 'Evening Prayer or Reflection', emoji: '🙏', instruction: 'Spend time in quiet prayer, meditation or reflection on gratitude, forgiveness and the blessings of the day.', meaning: 'Evening spiritual reflection can provide inner peace and connect personal values to daily experience.' },
      { time: '8:30 PM', title: 'Storytelling and Conversation', emoji: '📖', instruction: 'Share a story, memory, proverb or lesson with family or friends in the evening. Listen to their stories too.', meaning: 'Oral storytelling may preserve cultural memory, pass down wisdom and strengthen family bonds across generations.' }
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
      { time: '6:30 AM', title: 'Energetic Morning Greeting', emoji: '☀️', instruction: 'Greet your household with energy and warmth. Ask each person how they are and offer encouragement for their day.', meaning: 'Energetic greetings can set a positive, supportive tone and reflect the value of communal spirit.' },
      { time: '7:30 AM', title: 'Hearty Breakfast', emoji: '🍌', instruction: 'Eat a filling breakfast such as plantain, eggs, bread, pap or fruit. Share the meal with family if possible.', meaning: 'A hearty breakfast can reflect the cultural value of strength, nourishment and starting the day with abundance.' },
      { time: '8:30 AM', title: 'Greet Elders Respectfully', emoji: '🙏', instruction: 'Greet parents, teachers or elders with respectful words, humble posture and attentive listening. Do not rush the greeting.', meaning: 'Respectful greetings may reinforce intergenerational care, social values and the wisdom of elders.' },
      { time: '11:00 AM', title: 'Share Something with Others', emoji: '🎁', instruction: 'Share food, a story, a compliment or help with someone today. Give without expecting anything in return.', meaning: 'Generous sharing can reflect hospitality, community spirit and the belief that giving enriches everyone.' },
      { time: '1:30 PM', title: 'Shared Meal from One Pot', emoji: '🍛', instruction: 'Eat lunch with others from a shared pot or plate. Encourage others to eat first and make sure everyone has enough.', meaning: 'Shared eating can reflect hospitality, generosity and the cultural importance of communal abundance.' },
      { time: '3:30 PM', title: 'Express Yourself Through Music or Movement', emoji: '🎵', instruction: 'Listen to music, clap, sing or move to a rhythm that lifts your mood. Share the music with someone nearby.', meaning: 'Music and movement can foster joy, cultural expression, emotional release and social connection.' },
      { time: '5:30 PM', title: 'Help a Family Member', emoji: '🏠', instruction: 'Assist with a household task such as cleaning, cooking, fetching water or running an errand. Do it with a smile.', meaning: 'Helping family may reinforce responsibility, care, gratitude and the collective identity of the home.' },
      { time: '7:30 PM', title: 'Evening Family Time', emoji: '💬', instruction: 'Sit with family and talk about the day, share news, or discuss community events. Everyone should have a turn to speak.', meaning: 'Evening family time can strengthen bonds, pass down information and create a sense of belonging.' },
      { time: '9:00 PM', title: 'Evening Story or Proverb', emoji: '📜', instruction: 'Share a proverb, lesson, folk story or piece of wisdom with someone about life, community or values.', meaning: 'Sharing wisdom can preserve cultural identity, guide moral development and connect generations.' }
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
      { time: '6:30 AM', title: 'Greet the New Day', emoji: '🌅', instruction: 'Step outside or open your window. Greet the morning with a smile and say thank you for a new day.', meaning: 'Morning gratitude can cultivate optimism, connection to nature and appreciation for life’s daily renewal.' },
      { time: '7:30 AM', title: 'Morning Greeting', emoji: '👋', instruction: 'Greet your family or household warmly. Ask each person about their plans and offer encouragement.', meaning: 'Morning greetings may set a respectful, caring tone and reinforce family bonds at the start of the day.' },
      { time: '8:30 AM', title: 'Simple Shared Breakfast', emoji: '🫓', instruction: 'Eat a breakfast such as porridge, bread, fruit or tea with milk. Share what you have with someone who may not have eaten.', meaning: 'A simple, shared breakfast can reflect humility, generosity and the value of nourishment for all.' },
      { time: '10:30 AM', title: 'Help Someone with a Task', emoji: '🤝', instruction: 'Help a classmate, neighbour or family member with a task they need assistance with — carry something, explain homework, or fix an item.', meaning: 'Helping others may reinforce community spirit, mutual support and the belief that together we are stronger.' },
      { time: '12:30 PM', title: 'Eat Lunch with Others', emoji: '🍲', instruction: 'Eat lunch with family, friends or classmates. Share food and conversation equally. Do not eat alone if possible.', meaning: 'Shared meals can reinforce social bonds, create community and reflect the value of togetherness.' },
      { time: '2:30 PM', title: 'Nature Observation', emoji: '🌳', instruction: 'Spend time outside observing plants, birds, insects or the sky. Sketch, photograph or simply watch with curiosity.', meaning: 'Observing nature can strengthen environmental connection, patience and mindful awareness of the world.' },
      { time: '4:30 PM', title: 'Communal Task', emoji: '🧹', instruction: 'Join a group or family task — cleaning, gardening, cooking or organising. Work alongside others rather than alone.', meaning: 'Communal work can reinforce cooperation, shared responsibility and the satisfaction of collective achievement.' },
      { time: '6:30 PM', title: 'Shared Evening Meal', emoji: '🍛', instruction: 'Eat dinner with family or friends. Discuss the events of the day, share challenges, and celebrate small wins together.', meaning: 'Shared evening meals can reinforce family bonds, community identity and mutual emotional support.' },
      { time: '8:00 PM', title: 'Reflect on Community', emoji: '🌍', instruction: 'Think about one way your community supports you and one concrete way you can support them tomorrow.', meaning: 'Reflection on community can build gratitude, reciprocity and awareness of interdependence.' }
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
      { time: '6:30 AM', title: 'Morning Gratitude', emoji: '🌅', instruction: 'Upon waking, say a quiet prayer or expression of thanks for your family, health and the new day ahead.', meaning: 'Morning gratitude can centre the heart and connect daily life to spiritual values and humility.' },
      { time: '7:30 AM', title: 'Warm Family Breakfast', emoji: '🥙', instruction: 'Eat breakfast with family — bread, cheese, beans, falafel or fruit. Ask each person about their plans and hopes for the day.', meaning: 'A shared breakfast can reinforce family connection, emotional support and daily mutual care.' },
      { time: '8:30 AM', title: 'Greet with Respect', emoji: '🙏', instruction: 'Greet teachers, parents or elders with respectful words, attentive posture and sincere eye contact. Use their proper title.', meaning: 'Respectful greetings may reflect the cultural value placed on hierarchy, care and social order.' },
      { time: '10:30 AM', title: 'Learn Something New', emoji: '📚', instruction: 'Read about a historical topic, learn a new Arabic word, or ask someone to teach you a skill or story from their experience.', meaning: 'Pursuing knowledge may reflect the deep cultural value placed on education, curiosity and wisdom.' },
      { time: '12:30 PM', title: 'Generous Shared Lunch', emoji: '🍛', instruction: 'Eat lunch with others and share food generously. Offer the best portion to guests or elders before serving yourself.', meaning: 'Generous sharing can reflect hospitality, social honour and the belief that guests are a blessing.' },
      { time: '3:00 PM', title: 'Help at Home or School', emoji: '🏠', instruction: 'Assist with a task at home, help a younger sibling with homework, or support a classmate who is struggling.', meaning: 'Helping others can reinforce responsibility, compassion and the cultural value of supporting those around you.' },
      { time: '5:30 PM', title: 'Walk and Talk', emoji: '🚶', instruction: 'Take a walk with a family member or friend. Discuss your day, your thoughts or your dreams for the future.', meaning: 'Walking and talking together can build intimacy, trust and shared understanding across generations.' },
      { time: '7:00 PM', title: 'Evening Tea with Family', emoji: '🍵', instruction: 'Sit with family over tea and light snacks. Talk about your day, your worries and your joys. Everyone should speak.', meaning: 'Evening tea time can strengthen family dialogue, emotional closeness and the tradition of daily reunion.' },
      { time: '8:30 PM', title: 'Reflect on Heritage', emoji: '🏛️', instruction: 'Think about one tradition, story, historical figure or value from your culture that shapes who you are today.', meaning: 'Reflecting on heritage can strengthen personal identity, cultural pride and connection to history.' }
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
      { time: '7:30 AM', title: 'Warm Morning Greeting', emoji: '☀️', instruction: 'Greet every family member with warmth, a smile or a hug when you see them in the morning. Ask how they slept.', meaning: 'Warm morning greetings may reinforce affection, family connection and emotional security.' },
      { time: '8:30 AM', title: 'Hearty Breakfast', emoji: '🌮', instruction: 'Eat a breakfast such as eggs, tortillas, beans, fresh fruit or atole. Sit at the table with family if possible.', meaning: 'A hearty breakfast can reflect the cultural value of nourishment, energy and starting the day with abundance.' },
      { time: '10:00 AM', title: 'Check on a Family Member', emoji: '❤️', instruction: 'Call, message or speak to a relative you have not seen recently. Ask how they are and tell them you are thinking of them.', meaning: 'Staying connected to extended family can reinforce loyalty, care and the wide circle of family love.' },
      { time: '1:00 PM', title: 'Shared Meal with Family or Friends', emoji: '🥘', instruction: 'Eat a shared meal with family or friends. Share dishes, pass food to others first, and enjoy the conversation.', meaning: 'Shared meals can strengthen family ties, celebrate togetherness and honour the tradition of communal dining.' },
      { time: '3:30 PM', title: 'Music or Creative Activity', emoji: '🎵', instruction: 'Listen to music, draw, dance, or do something creative that connects you to your culture or lifts your spirit.', meaning: 'Creative expression can foster joy, cultural pride and emotional wellbeing in daily life.' },
      { time: '5:30 PM', title: 'Help Prepare Dinner', emoji: '🌶️', instruction: 'Help chop vegetables, make tortillas, set the table or assist with cooking the evening meal alongside family.', meaning: 'Cooking together can reinforce cooperation, shared cultural knowledge and the joy of creating together.' },
      { time: '7:00 PM', title: 'Evening Reflection on Community', emoji: '🕯️', instruction: 'Think about the role your family and community play in your daily life. What do they give you? What do you give back?', meaning: 'Reflection on community can help individuals appreciate how relationships shape identity and values.' },
      { time: '8:30 PM', title: 'Express Appreciation', emoji: '💌', instruction: 'Tell someone in your family or community specifically why you appreciate them. Be detailed and sincere.', meaning: 'Expressing appreciation may deepen social bonds, reinforce mutual support and create emotional connection.' }
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
      { time: '7:00 AM', title: 'Personal Morning Routine', emoji: '☕', instruction: 'Create a morning routine that works for you — exercise, reading, journaling or quiet time. Make it yours.', meaning: 'A personal morning routine can reflect individualism, self-care and the value of starting the day intentionally.' },
      { time: '8:00 AM', title: 'Quick Breakfast', emoji: '🥞', instruction: 'Eat a breakfast such as cereal, toast, fruit, eggs or a smoothie. Choose something that fuels your body and mind.', meaning: 'A practical morning meal can reflect a focus on energy, health and preparing for an active day.' },
      { time: '9:00 AM', title: 'Friendly Greeting', emoji: '👋', instruction: 'Greet classmates, teachers or colleagues with a friendly word, smile or wave. Acknowledge people you pass.', meaning: 'Friendly greetings may create an open, welcoming atmosphere and break down social barriers.' },
      { time: '11:00 AM', title: 'Speak Up in Class or Work', emoji: '🗣️', instruction: 'Share an idea, ask a question or contribute to a discussion today. Your voice matters in the group.', meaning: 'Speaking up can encourage self-confidence, active participation and the belief that every perspective has value.' },
      { time: '12:30 PM', title: 'Casual Lunch with Peers', emoji: '🥪', instruction: 'Eat lunch with friends or classmates. Discuss your interests, plans or opinions in a relaxed, open way.', meaning: 'Casual social meals can build peer connections, confidence in conversation and a sense of belonging.' },
      { time: '3:00 PM', title: 'Help Your Community', emoji: '🤝', instruction: 'Do one small act of community service: pick up litter, hold a door, tutor a peer, or help a neighbour.', meaning: 'Community service can reflect social responsibility, civic pride and the value of giving back.' },
      { time: '5:00 PM', title: 'Pursue a Personal Interest', emoji: '🎨', instruction: 'Spend 30 minutes on a hobby, sport, art or skill you enjoy. Do it because you love it, not because you have to.', meaning: 'Pursuing personal interests can encourage individuality, creativity and a well-rounded sense of self.' },
      { time: '7:00 PM', title: 'Dinner and Share Your Day', emoji: '💬', instruction: 'Eat dinner with family or friends and share one highlight, one challenge and one goal from your day.', meaning: 'Sharing daily experiences openly can build trust, emotional connection and mutual support.' },
      { time: '8:30 PM', title: 'Reflect on Individual and Community', emoji: '🤔', instruction: 'Think about one personal goal you are working toward and one way you can help your community this week.', meaning: 'Balancing personal and community goals can shape a well-rounded, purposeful sense of identity.' }
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
      { time: '7:00 AM', title: 'Bright Morning Greeting', emoji: '☀️', instruction: 'Greet people around you with genuine warmth, a big smile and positive energy. Make them feel welcome.', meaning: 'A warm greeting can set a joyful tone and reflect social openness, energy and emotional generosity.' },
      { time: '8:00 AM', title: 'Colourful Fruit Breakfast', emoji: '🍌', instruction: 'Eat a breakfast with fresh fruit, bread or a smoothie. Choose colourful, natural foods that make you feel alive.', meaning: 'A fresh breakfast can reflect the cultural appreciation for natural, vibrant food and bodily vitality.' },
      { time: '9:30 AM', title: 'Compliment Someone Sincerely', emoji: '💛', instruction: 'Give someone a genuine, specific compliment about their personality, effort or kindness today.', meaning: 'Sincere compliments may spread positivity, build self-esteem and strengthen social connections.' },
      { time: '12:30 PM', title: 'Relaxed Shared Lunch', emoji: '🍲', instruction: 'Eat lunch with others in a relaxed way. Talk, laugh, share stories and do not rush through the meal.', meaning: 'A leisurely shared meal can strengthen bonds and reflect enjoyment of social time over strict schedules.' },
      { time: '2:30 PM', title: 'Music or Movement Break', emoji: '🎵', instruction: 'Listen to music, tap your feet, sing along, or dance to a rhythm for at least 10 minutes. Let yourself feel the beat.', meaning: 'Music and movement can express emotion, release stress, build joy and connect people across differences.' },
      { time: '4:30 PM', title: 'Outdoor Social Time', emoji: '🏖️', instruction: 'Spend time outside with friends or family in a park, courtyard or open space. Play, talk or simply be together.', meaning: 'Outdoor social time can reflect appreciation for nature, sunshine and communal life in open spaces.' },
      { time: '6:30 PM', title: 'Cook Together', emoji: '🌽', instruction: 'Help prepare a simple meal with family or friends. Chop, stir, taste and laugh together in the kitchen.', meaning: 'Cooking together can reinforce cooperation, shared pleasure and the joy of creating something as a group.' },
      { time: '8:00 PM', title: 'Express Gratitude Openly', emoji: '❤️', instruction: 'Tell someone openly and warmly why you value their friendship, presence or kindness. Do not hold back.', meaning: 'Open expression of gratitude may deepen trust, emotional connection and the warmth of relationships.' }
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
      { time: '7:30 AM', title: 'Shared Morning Drink', emoji: '☕', instruction: 'Share a warm drink such as tea, coffee or mate with a family member. Pass the cup back and forth while talking.', meaning: 'Sharing a morning drink can reflect the value of starting the day together with intimacy and conversation.' },
      { time: '8:30 AM', title: 'Warm Embrace or Greeting', emoji: '🤗', instruction: 'Greet a friend or family member with a warm hug, a kiss on the cheek or genuinely kind words.', meaning: 'Physical warmth in greetings may reinforce affection, trust and the closeness of personal relationships.' },
      { time: '10:00 AM', title: 'Passionate Conversation', emoji: '💬', instruction: 'Engage in a conversation about something you care about. Express your feelings openly and listen with equal passion.', meaning: 'Passionate dialogue can reflect the cultural value of emotional honesty and intellectual engagement.' },
      { time: '1:00 PM', title: 'Long Lunch with Deep Talk', emoji: '🥩', instruction: 'Eat a leisurely lunch with family or friends for at least an hour. Discuss ideas, dreams, fears and joys.', meaning: 'A long, talkative lunch can strengthen social bonds and reflect appreciation for meaningful dialogue.' },
      { time: '3:30 PM', title: 'Mate Circle with Friends', emoji: '🧉', instruction: 'Sit with friends or family in a circle. Share mate, tea or snacks while talking about life. Everyone gets a turn.', meaning: 'Shared drinking circles can reinforce equality, trust and communal identity through equal participation.' },
      { time: '5:30 PM', title: 'Walk and Talk', emoji: '🚶', instruction: 'Take an evening walk with someone and talk about your thoughts, dreams, daily events or something that moved you.', meaning: 'Walking and talking together can build intimacy, shared understanding and emotional connection.' },
      { time: '7:30 PM', title: 'Family Dinner and Debate', emoji: '🍽️', instruction: 'Have dinner with family and discuss a topic everyone has an opinion on. Respect different views and learn from each other.', meaning: 'Respectful debate at dinner can strengthen critical thinking, family bonds and appreciation for diverse perspectives.' },
      { time: '9:30 PM', title: 'Reflect on Friendship and Loyalty', emoji: '💭', instruction: 'Think about one friend who has shaped your life. What does loyalty mean to you? How do you show it?', meaning: 'Reflecting on friendship can strengthen appreciation for deep social bonds and personal commitment to others.' }
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
      { time: '6:30 AM', title: 'Sunrise and Fresh Air', emoji: '🌅', instruction: 'Step outside at sunrise or early morning. Breathe deeply, feel the fresh air and notice the sounds of nature.', meaning: 'Morning fresh air can reflect appreciation for nature, mindfulness and an active start to the day.' },
      { time: '7:30 AM', title: 'Outdoor Breakfast', emoji: '🍳', instruction: 'Eat breakfast outside on a patio, balcony or near a window. Watch the birds or clouds while you eat.', meaning: 'Eating outdoors can reflect the cultural value of connecting with nature and the environment at every opportunity.' },
      { time: '8:30 AM', title: 'Casual Friendly Greeting', emoji: '👋', instruction: 'Greet someone with a casual, friendly word or gesture. Keep it light, genuine and without formality.', meaning: 'Casual friendliness may create an inclusive, relaxed social atmosphere where everyone feels welcome.' },
      { time: '10:30 AM', title: 'Check on a Mate', emoji: '🤝', instruction: 'Message, call or speak to a friend to ask how they are doing. Use the word "mate" or a friendly nickname.', meaning: 'Checking on friends can reinforce mateship, loyalty and the cultural value of looking out for one another.' },
      { time: '12:30 PM', title: 'Outdoor Lunch', emoji: '🥪', instruction: 'Eat lunch outside in a park, courtyard or sunny spot. Leave your phone in your bag and enjoy the surroundings.', meaning: 'Eating outdoors can reflect the cultural value of connecting with nature, sunshine and open spaces.' },
      { time: '2:30 PM', title: 'Active Outdoor Break', emoji: '🏃', instruction: 'Spend at least 20 minutes outside being active — walk, stretch, play sport or simply move in the sunshine.', meaning: 'Outdoor activity can encourage physical health, mental clarity and appreciation for the natural environment.' },
      { time: '5:00 PM', title: 'Shared Casual Meal', emoji: '🍖', instruction: 'Cook or eat a simple shared meal with family or friends. Keep it relaxed — perhaps grilled food, salads or sandwiches.', meaning: 'Shared casual meals can reinforce social bonds, community spirit and the value of informal togetherness.' },
      { time: '6:30 PM', title: 'Walk in Nature', emoji: '🌳', instruction: 'Take a walk in a park, along a beach, or through bushland. Observe the native plants, animals or landscape.', meaning: 'Walking in nature can deepen environmental connection, respect for the land and physical wellbeing.' },
      { time: '8:00 PM', title: 'Reflect on Fairness and Inclusion', emoji: '🤔', instruction: 'Think about one way you included someone today or stood up for fairness. How did it feel? What did you learn?', meaning: 'Reflecting on fairness can strengthen moral identity, social responsibility and commitment to equality.' }
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
let isDrawing = false;

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
  if (freqs.length < 2) {
    playTone(freqs[0] || 440, duration, 'sine', volume, 0);
    return;
  }
  freqs.forEach((f, i) => {
    const pan = -0.3 + (i / (freqs.length - 1)) * 0.6;
    playTone(f, duration, 'sine', volume, pan);
  });
}

/* SFX */
function sfxClick() {
  playTone(880, 0.06, 'sine', 0.30, -0.15);
  setTimeout(() => playTone(1100, 0.08, 'sine', 0.26, 0.15), 30);
  setTimeout(() => playTone(1320, 0.10, 'sine', 0.20, 0.3), 60);
}
function sfxTick() {
  playTone(1600, 0.06, 'sine', 0.28, -0.3);
  setTimeout(() => playTone(2000, 0.05, 'sine', 0.18, 0.3), 40);
}
function sfxUntick() {
  playTone(600, 0.10, 'sine', 0.22, 0.3);
  setTimeout(() => playTone(400, 0.12, 'triangle', 0.14, -0.3), 50);
}
function sfxReset() {
  playTone(300, 0.15, 'triangle', 0.24, -0.4);
  setTimeout(() => playTone(220, 0.18, 'triangle', 0.20, 0.4), 80);
  setTimeout(() => playTone(150, 0.22, 'sawtooth', 0.14, 0), 180);
}
function sfxError() {
  playTone(150, 0.14, 'sawtooth', 0.22, -0.3);
  setTimeout(() => playTone(120, 0.18, 'sawtooth', 0.18, 0.3), 70);
}

function sfxDrawStart() {
  if (!soundEnabled || !audioCtx) return;
  // Layer 1: rising sweep
  const osc1 = audioCtx.createOscillator();
  const gain1 = audioCtx.createGain();
  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(120, audioCtx.currentTime);
  osc1.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.7);
  gain1.gain.setValueAtTime(0.32 * sfxVolume, audioCtx.currentTime);
  gain1.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.7);
  osc1.connect(gain1);
  gain1.connect(audioCtx.destination);
  osc1.start();
  osc1.stop(audioCtx.currentTime + 0.7);

  // Layer 2: low rumble
  const osc2 = audioCtx.createOscillator();
  const gain2 = audioCtx.createGain();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(60, audioCtx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.7);
  gain2.gain.setValueAtTime(0.18 * sfxVolume, audioCtx.currentTime);
  gain2.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.7);
  osc2.connect(gain2);
  gain2.connect(audioCtx.destination);
  osc2.start();
  osc2.stop(audioCtx.currentTime + 0.7);
}

function sfxDrawComplete() {
  // Ascending fanfare with stereo spread
  playChord([523, 659, 784], 0.5, 0.32);
  setTimeout(() => playChord([587, 740, 880], 0.5, 0.28), 120);
  setTimeout(() => playChord([659, 784, 1047], 0.7, 0.30), 240);
  setTimeout(() => playChord([784, 988, 1175], 0.8, 0.26), 420);
  setTimeout(() => playChord([523, 659, 784, 1047], 1.2, 0.28), 650);
}

function sfxCelebrate() {
  // Rich arpeggio cascade
  const arpeggio = [523, 587, 659, 698, 784, 880, 988, 1047, 1175, 1319];
  arpeggio.forEach((n, i) => {
    const pan = -0.6 + (i / (arpeggio.length - 1)) * 1.2;
    setTimeout(() => playTone(n, 0.28, 'sine', 0.26, pan), i * 50);
  });
  // Harmonic chords underneath
  setTimeout(() => playChord([523, 659, 784], 0.8, 0.22), 150);
  setTimeout(() => playChord([659, 784, 1047], 1.0, 0.22), 350);
  setTimeout(() => playChord([523, 659, 784, 1047], 1.6, 0.26), 600);
  setTimeout(() => playChord([392, 523, 659, 784], 2.0, 0.18), 900);
}

/* BGM — Rich Melodic Sequence */
const bgmMelody = [
  { freqs: [261.63, 329.63, 392.00, 523.25], duration: 2.2 },
  { freqs: [293.66, 349.23, 440.00, 587.33], duration: 2.2 },
  { freqs: [329.63, 392.00, 493.88, 659.25], duration: 2.2 },
  { freqs: [349.23, 440.00, 523.25, 698.46], duration: 2.2 },
  { freqs: [392.00, 493.88, 587.33, 783.99], duration: 2.2 },
  { freqs: [349.23, 440.00, 523.25, 698.46], duration: 2.2 },
  { freqs: [329.63, 392.00, 493.88, 659.25], duration: 2.2 },
  { freqs: [261.63, 329.63, 392.00, 523.25], duration: 2.8 },
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
    gain.gain.setValueAtTime(0.065 * bgmVolume, audioCtx.currentTime);
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
  const colors = ['#5cb85c', '#4a90d9', '#f0ad4e', '#e74c3c', '#9b59b6', '#1abc9c', '#ffd700', '#ff6b6b'];
  for (let i = 0; i < 28; i++) {
    const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.6;
    const speed = Math.random() * 5 + 2.5;
    miniParticles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1.0,
      decay: Math.random() * 0.025 + 0.018,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 5 + 2,
      shape: Math.random() > 0.6 ? 'star' : 'circle'
    });
  }
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, alpha) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;
    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function drawMiniParticles() {
  miniCtx.clearRect(0, 0, miniParticlesCanvas.width, miniParticlesCanvas.height);
  for (let i = miniParticles.length - 1; i >= 0; i--) {
    const p = miniParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.10;
    p.vx *= 0.98;
    p.life -= p.decay;

    if (p.life <= 0) {
      miniParticles.splice(i, 1);
      continue;
    }

    miniCtx.globalAlpha = p.life;
    miniCtx.fillStyle = p.color;
    const s = p.size * p.life;
    if (p.shape === 'star') {
      drawStar(miniCtx, p.x, p.y, 5, s * 1.4, s * 0.6, p.life);
    } else {
      miniCtx.beginPath();
      miniCtx.arc(p.x, p.y, s, 0, Math.PI * 2);
      miniCtx.fill();
    }
  }
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
  try { localStorage.setItem('theme', next); } catch(e) {}
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
  const num = parseFloat(val);
  if (isNaN(num)) return;
  sfxVolume = num / 100;
  document.getElementById('sfxVolumeValue').textContent = num + '%';
  try { localStorage.setItem('sfxVolume', num); } catch(e) {}
}

function updateBgmVolume(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return;
  bgmVolume = num / 100;
  document.getElementById('bgmVolumeValue').textContent = num + '%';
  try { localStorage.setItem('bgmVolume', num); } catch(e) {}
}

/* ================================================================
   SETTINGS & PANELS
   ================================================================ */

function toggleSettings() {
  sfxClick();
  settingsPanel.classList.toggle('hidden');
  achievementsPanel.classList.add('hidden');
  const btn = document.getElementById('settingsBtn');
  if (btn) btn.setAttribute('aria-expanded', !settingsPanel.classList.contains('hidden'));
}

function toggleAchievements() {
  sfxClick();
  achievementsPanel.classList.toggle('hidden');
  settingsPanel.classList.add('hidden');
  const btn = document.getElementById('achieveBtn');
  if (btn) btn.setAttribute('aria-expanded', !achievementsPanel.classList.contains('hidden'));
  if (!achievementsPanel.classList.contains('hidden')) renderAchievements();
}

function toggleReducedMotion() {
  sfxClick();
  reducedMotion = !reducedMotion;
  document.body.classList.toggle('reduced-motion', reducedMotion);
  document.getElementById('reducedMotionToggle').setAttribute('aria-pressed', reducedMotion);
  try { localStorage.setItem('reducedMotion', reducedMotion); } catch(e) {}
  showToast(reducedMotion ? 'Reduced motion enabled' : 'Reduced motion disabled', 'success');
}

/* ================================================================
   ACHIEVEMENTS SYSTEM
   ================================================================ */

function unlockAchievement(id) {
  if (achievements[id]) return;
  achievements[id] = { unlocked: true, time: Date.now() };
  try { localStorage.setItem('achievements', JSON.stringify(achievements)); } catch(e) {}
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
  if (saved) {
    try { achievements = JSON.parse(saved); } catch(e) { achievements = {}; }
  }
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
  const colors = ['#4a90d9', '#5cb85c', '#f0ad4e', '#e74c3c', '#9b59b6', '#1abc9c', '#3498db', '#ff6b6b', '#ffd700', '#ff8c42', '#00d2ff'];
  for (let i = 0; i < 320; i++) {
    const shapeRoll = Math.random();
    let shape = 'rect';
    if (shapeRoll > 0.65) shape = 'circle';
    else if (shapeRoll > 0.35) shape = 'star';
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: Math.random() * 12 + 4,
      h: Math.random() * 7 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 4 + 1.5,
      angle: Math.random() * 360,
      spin: Math.random() * 8 - 4,
      sway: Math.random() * 2 - 1,
      shape: shape
    });
  }
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
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
    } else if (p.shape === 'star') {
      drawStar(confettiCtx, 0, 0, 5, p.w / 1.6, p.w / 3.5, alpha);
    } else {
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    }
    confettiCtx.restore();

    if (p.y > confettiCanvas.height + 20) confettiParticles.splice(i, 1);
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(drawConfetti);
  } else {
    confettiAnimationId = null;
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
  for (let i = 0; i < 36; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 10 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = `${Math.random() * 18 + 12}s`;
    p.style.animationDelay = `${Math.random() * 12}s`;
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
  let tiltElements = [];
  const updateTiltElements = () => {
    tiltElements = Array.from(document.querySelectorAll('.task-card, .info-block, .step'));
  };
  // Refresh cached elements periodically and on DOM changes
  updateTiltElements();
  const observer = new MutationObserver(updateTiltElements);
  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('mousemove', (e) => {
    tiltElements.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      } else if (card.style.transform) {
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
  const tag = e.target.tagName;
  const isEditable = e.target.isContentEditable;
  if (tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'BUTTON' || tag === 'A' || tag === 'SELECT' || isEditable) return;
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
      e.preventDefault();
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
  } else if (!document.hidden && bgmEnabled && !bgmInterval) {
    initAudio();
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
    const cb = document.getElementById(`task-${i}`);
    const checked = cb && cb.checked ? '✅' : '⬜';
    text += `${checked} ${t.time} — ${t.title}\n`;
    text += `   ${t.instruction}\n`;
    text += `   💡 ${t.meaning}\n\n`;
  });
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Challenge copied to clipboard!', 'success');
    }).catch(() => showToast('Failed to copy', 'error'));
  } else {
    showToast('Clipboard not available in this context', 'error');
  }
}

function copyReflection() {
  sfxClick();
  const text = reflectionText.value.trim();
  if (!text) { showToast('Nothing to copy yet', 'error'); return; }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Reflection copied!', 'success');
    }).catch(() => showToast('Failed to copy', 'error'));
  } else {
    showToast('Clipboard not available in this context', 'error');
  }
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
  try { localStorage.setItem('onboardingSeen', 'true'); } catch(e) {}
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
    try { localStorage.setItem('drawHistory', JSON.stringify(drawHistory)); } catch(e) {}
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
    const flagSpan = document.createElement('span');
    flagSpan.className = 'hist-flag';
    flagSpan.textContent = h.flag;
    item.appendChild(flagSpan);
    item.appendChild(document.createTextNode(' ' + h.name));
    historyList.appendChild(item);
  });
}

function loadHistory() {
  const saved = localStorage.getItem('drawHistory');
  if (saved) {
    try {
      drawHistory = JSON.parse(saved);
      renderHistory();
    } catch(e) { drawHistory = []; }
  }
}

/* ================================================================
   RANDOM DRAW
   ================================================================ */

function drawCountry() {
  if (isDrawing) return;
  isDrawing = true;
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
  const selectorArea = document.querySelector('.selector-area');
  if (selectorArea) selectorArea.classList.add('spinning');

  const cycleInterval = setInterval(() => {
    const random = countries[Math.floor(Math.random() * countries.length)];
    flagDisplay.textContent = random.flag;
    countryNameDisplay.textContent = random.name;
  }, 85);

  setTimeout(() => {
    clearInterval(cycleInterval);
    spinnerRing.classList.remove('spinning');
    spinnerGlow.classList.remove('active');
    const selectorArea = document.querySelector('.selector-area');
    if (selectorArea) selectorArea.classList.remove('spinning');

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
      const firstTask = document.querySelector('.task-checkbox');
      if (firstTask) firstTask.focus();
    }, 100);
    isDrawing = false;
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
    checkbox.setAttribute('aria-label', `${task.time}: ${task.title}`);
    checkbox.addEventListener('change', () => {
      const rect = checkbox.getBoundingClientRect();
      if (checkbox.checked) {
        sfxTick();
        spawnMiniBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
        drawMiniParticles();
      } else {
        sfxUntick();
      }
      updateProgress();
      saveState();
    });

    tasksContainer.appendChild(card);

    // Staggered entrance with rotation
    setTimeout(() => {
      card.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) rotateX(0deg)';
    }, 70 * index);
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
    try { localStorage.removeItem('challengeState'); } catch(e) {}
    return;
  }
  const checkboxes = document.querySelectorAll('.task-checkbox');
  const checked = Array.from(checkboxes).map(cb => cb.checked);
  const state = {
    countryId: currentCountry.id,
    tasksChecked: checked,
    reflection: reflectionText.value,
    timestamp: Date.now(),
    hasReset: hasReset
  };
  try { localStorage.setItem('challengeState', JSON.stringify(state)); } catch(e) {}
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
    hasReset = !!state.hasReset;

    showCountryResult(country);
    showTasks(country);

    state.tasksChecked.forEach((checked, i) => {
      const cb = document.getElementById(`task-${i}`);
      if (cb) cb.checked = checked;
    });

    reflectionText.value = state.reflection || '';
    addToHistory(country);

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
   REFLECTION AUTO-SAVE (debounced)
   ================================================================ */

let reflectionDebounce;
reflectionText.addEventListener('input', () => {
  if (reflectionText.value.trim().length > 20) {
    unlockAchievement('deep_thinker');
  }
  clearTimeout(reflectionDebounce);
  reflectionDebounce = setTimeout(saveState, 400);
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
