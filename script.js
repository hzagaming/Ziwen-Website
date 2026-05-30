/* ================================================================
   RANDOM COUNTRY LIFESTYLE CHALLENGE — MAXIMUM EDITION
   UI/UX/SFX/BGM Fully Optimized. User Experience Priority.
   ================================================================ */

/* ========== Country Data (30 Countries, 20 Detailed Tasks Each) ========== */
const countries = [
  /* ===== CHINA ===== */
  {
    id: "china",
    name: "China",
    flag: "\ud83c\udde8\ud83c\uddf3",
    background: "China has a long history emphasising family bonds, respect for elders, and the value of education. In many contexts, daily life revolves around shared meals and collective responsibility.",
    focus: "Family, respect, education, shared meals, and social responsibility.",
    identity: "Chinese daily habits can shape identity by encouraging respect, family responsibility, education and social belonging.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Qi Gong or Stretching", "emoji": "\ud83c\udf05", "instruction": "Wake up and practise gentle qi gong, tai chi movements or stretching by a window for 15 minutes to energise your body.", "meaning": "Morning movement can reflect the cultural value placed on balance, health and mindful preparation for the day ahead."},
      {"time": "6:30 AM", "title": "Make Your Bed and Tidy Space", "emoji": "\ud83d\udecf\ufe0f", "instruction": "Make your bed neatly, open the curtains wide, and tidy any items left out from the night before.", "meaning": "Starting the day with a clean space can reflect discipline, mindfulness and respect for your surroundings."},
      {"time": "7:00 AM", "title": "Wash and Dress with Care", "emoji": "\ud83e\uddfc", "instruction": "Wash your face, brush your teeth and dress neatly. Present yourself with care and attention to appearance.", "meaning": "Personal grooming can reflect self-respect and the value of presenting oneself thoughtfully to others."},
      {"time": "7:30 AM", "title": "Warm Family Breakfast", "emoji": "\ud83e\udd5f", "instruction": "Eat a warm breakfast such as congee, baozi, soy milk or noodles. Sit with family and ask about their plans for the day.", "meaning": "A warm shared breakfast can reinforce family bonds and the importance of beginning the day together with care."},
      {"time": "8:00 AM", "title": "Greet Elders and Teachers", "emoji": "\ud83d\ude4f", "instruction": "Greet parents, grandparents or teachers with respectful words and attentive posture. Ask if they need any help today.", "meaning": "Respectful greetings may reinforce social harmony and the importance of intergenerational relationships in daily life."},
      {"time": "8:30 AM", "title": "Prepare for the Day Ahead", "emoji": "\ud83c\udf92", "instruction": "Organise your belongings, pack your bag and review your schedule. Leave early so you are never rushed.", "meaning": "Preparation and punctuality may show respect for others' time and reflect organisational values."},
      {"time": "9:00 AM", "title": "Focused Study or Work", "emoji": "\ud83d\udcda", "instruction": "Spend 45 minutes in focused study or work. Put your phone away and concentrate completely on one task.", "meaning": "Dedicated effort towards learning can reflect the cultural value placed on self-improvement, persistence and responsibility."},
      {"time": "9:30 AM", "title": "Tea Break with Others", "emoji": "\ud83c\udf75", "instruction": "Take a short break with tea or hot water. Chat with a classmate, colleague or family member about non-work topics.", "meaning": "Social breaks can maintain relationships and reflect the belief that rest and connection are essential to productivity."},
      {"time": "10:00 AM", "title": "Community Check-In", "emoji": "\ud83e\udd1d", "instruction": "Call, message or speak to a neighbour or community member. Ask how they are doing and offer help if needed.", "meaning": "Checking in with community members can strengthen mutual support networks and social belonging."},
      {"time": "10:30 AM", "title": "Practise a Traditional Skill", "emoji": "\u270d\ufe0f", "instruction": "Spend 20 minutes practising calligraphy, a musical instrument, cooking or another traditional skill.", "meaning": "Practising traditional skills can preserve cultural heritage and strengthen personal identity through mastery."},
      {"time": "11:00 AM", "title": "Market Visit or Shopping", "emoji": "\ud83e\udd6c", "instruction": "Visit a local shop or market. Choose fresh ingredients for lunch and chat with the vendor about their day.", "meaning": "Shopping locally can reflect appreciation for fresh food, community connection and personal relationships."},
      {"time": "12:00 PM", "title": "Shared Lunch with Variety", "emoji": "\ud83c\udf5c", "instruction": "Eat lunch together with family, classmates or friends. Share dishes from common plates and offer food to others first.", "meaning": "Sharing food can strengthen group bonds, teach generosity and create a sense of community belonging."},
      {"time": "1:00 PM", "title": "Afternoon Rest or Reading", "emoji": "\ud83d\ude0c", "instruction": "Take 30 minutes to rest, nap lightly, or read a book in a quiet space without screens.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and balancing activity with renewal."},
      {"time": "2:00 PM", "title": "Creative or Artistic Activity", "emoji": "\ud83c\udfa8", "instruction": "Draw, paint, write poetry, or engage in another creative activity for 30 minutes. Express yourself freely.", "meaning": "Creative expression can foster emotional release, cultural pride and personal wellbeing."},
      {"time": "3:00 PM", "title": "Outdoor Walk or Exercise", "emoji": "\ud83c\udf33", "instruction": "Go outside for a walk, jog or light exercise. Observe the trees, sky and people around you.", "meaning": "Outdoor activity can encourage physical health, mental clarity and appreciation for the environment."},
      {"time": "4:00 PM", "title": "Help with a Household Task", "emoji": "\ud83c\udfe0", "instruction": "Assist a family member with cooking, cleaning, organising or an errand \u2014 without being asked first.", "meaning": "Helping family without being asked may reinforce responsibility, care and the collective nature of home life."},
      {"time": "5:30 PM", "title": "Help Prepare Dinner", "emoji": "\ud83c\udf72", "instruction": "Help wash vegetables, chop ingredients, set the table or cook alongside a family member.", "meaning": "Contributing to meal preparation can reinforce family cooperation, shared cultural knowledge and gratitude."},
      {"time": "7:00 PM", "title": "Family Dinner Together", "emoji": "\ud83e\udd58", "instruction": "Eat dinner with your family at the table. Discuss what everyone did today and listen actively to each person.", "meaning": "Shared evening meals can strengthen family identity and create space for mutual support and understanding."},
      {"time": "8:00 PM", "title": "Evening Walk or Leisure", "emoji": "\ud83c\udf19", "instruction": "Take a relaxed evening walk, play a game with family, or watch a show together. Unwind from the day.", "meaning": "Evening leisure can encourage balance, family connection and reflection on the day's experiences."},
      {"time": "9:30 PM", "title": "Reflection and Preparation", "emoji": "\ud83d\udccb", "instruction": "Write or think about one thing you learned, one act of respect you showed, and one thing you are grateful for. Prepare for tomorrow.", "meaning": "Daily reflection can strengthen awareness of how small actions connect to personal values, relationships and growth."},
    ]
  },
  /* ===== JAPAN ===== */
  {
    id: "japan",
    name: "Japan",
    flag: "\ud83c\uddef\ud83c\uddf5",
    background: "Japanese culture in many contexts emphasises respect for others, punctuality, cleanliness, and maintaining social harmony. Self-discipline and awareness of group needs are often valued.",
    focus: "Respect, punctuality, cleanliness, harmony and self-discipline.",
    identity: "Japanese daily habits can shape identity by encouraging discipline, respect, social harmony and awareness of others.",
    tasks: [
      {"time": "6:00 AM", "title": "Rise and Open the Windows", "emoji": "\ud83c\udf05", "instruction": "Wake up, open the curtains wide to let in natural light, and take three deep breaths of fresh air.", "meaning": "Starting the day with natural light and fresh air can reflect mindfulness and connection to the environment."},
      {"time": "6:30 AM", "title": "Morning Radio Taiso", "emoji": "\ud83c\udfc3", "instruction": "Follow a short radio taiso routine \u2014 gentle stretching and calisthenics to wake up your body.", "meaning": "Radio taiso can reflect the cultural emphasis on collective health, discipline and daily physical care."},
      {"time": "7:00 AM", "title": "Tidy Your Room", "emoji": "\ud83e\uddf9", "instruction": "Make your bed, fold any clothes, and ensure your room is clean and organised before leaving.", "meaning": "A tidy space can reflect self-discipline, respect for your surroundings and a clear mind."},
      {"time": "7:30 AM", "title": "Balanced Breakfast", "emoji": "\ud83c\udf5a", "instruction": "Prepare a balanced breakfast with rice, miso soup, egg and fruit. Eat mindfully without looking at screens.", "meaning": "A thoughtful morning meal can reflect the value placed on balance, health and mindful preparation."},
      {"time": "8:00 AM", "title": "Polite Family Greeting", "emoji": "\ud83d\ude47", "instruction": "Greet family members with a slight bow or polite words. Express gratitude for the meal and the day ahead.", "meaning": "Respectful morning greetings may set a positive tone and reinforce care for family relationships."},
      {"time": "8:30 AM", "title": "Prepare and Leave Early", "emoji": "\u23f0", "instruction": "Check you have everything you need and leave early so you arrive on time or slightly early.", "meaning": "Punctuality and preparation may show respect for others' time and reflect personal reliability."},
      {"time": "9:00 AM", "title": "Focus Without Distractions", "emoji": "\ud83d\udcd6", "instruction": "Work or study for 50 minutes with complete focus. Turn off all notifications and avoid multitasking.", "meaning": "Focused work can reflect efficiency, self-discipline and the value of doing one thing well at a time."},
      {"time": "9:30 AM", "title": "Short Break with Green Tea", "emoji": "\ud83c\udf75", "instruction": "Brew a cup of green tea. Sip it slowly while looking out a window or chatting briefly with someone.", "meaning": "A mindful tea break can encourage presence, calm and appreciation for simple daily pleasures."},
      {"time": "10:00 AM", "title": "Listen Carefully in Conversation", "emoji": "\ud83d\udc42", "instruction": "In every conversation today, listen fully before responding. Use polite language and avoid interrupting.", "meaning": "Careful listening may strengthen social harmony, mutual respect and deeper understanding in relationships."},
      {"time": "10:30 AM", "title": "Practise a Craft or Skill", "emoji": "\ud83c\udf8c", "instruction": "Spend 20 minutes practising origami, a language, an instrument or another precise skill.", "meaning": "Practising precise crafts can reflect the cultural value of mastery, patience and attention to detail."},
      {"time": "11:00 AM", "title": "Tidy a Shared Space", "emoji": "\ud83e\uddfd", "instruction": "Clean a shared area such as a kitchen counter, desk or living room without being asked.", "meaning": "Cleaning shared spaces can reflect consideration for communal areas and collective responsibility."},
      {"time": "12:00 PM", "title": "Clean Lunch Space", "emoji": "\ud83c\udf71", "instruction": "Eat lunch and then clean your eating space thoroughly. Wipe the table and dispose of waste properly.", "meaning": "Cleaning up after oneself can reflect respect for shared spaces and mindfulness of others who use them."},
      {"time": "1:00 PM", "title": "Quiet Reading or Nature Walk", "emoji": "\ud83c\udf32", "instruction": "Spend 30 minutes reading quietly or walking outside in a park. Observe the natural world around you.", "meaning": "Quiet time in nature can encourage reflection, calm and appreciation for simple, everyday beauty."},
      {"time": "2:00 PM", "title": "Group Collaboration", "emoji": "\ud83d\udc65", "instruction": "Work on a task with classmates or colleagues. Share ideas equally and support each other's efforts.", "meaning": "Group collaboration can reflect the cultural value of collective success and mutual support."},
      {"time": "3:00 PM", "title": "Take a Walk Outside", "emoji": "\ud83d\udeb6", "instruction": "Go for a 20-minute walk outside. Notice the architecture, trees and seasonal changes around you.", "meaning": "Being present in your surroundings can encourage mindfulness and appreciation for the changing seasons."},
      {"time": "4:00 PM", "title": "Help Prepare Tea for Others", "emoji": "\ud83e\uded6", "instruction": "Prepare tea or a snack for family members or guests. Serve it with care and attention to detail.", "meaning": "Serving others with care can reinforce hospitality, gratitude and the joy of shared moments."},
      {"time": "5:30 PM", "title": "Assist with Evening Meal", "emoji": "\ud83e\udd62", "instruction": "Help set the table, wash vegetables or assist with simple cooking tasks for dinner.", "meaning": "Contributing to meal preparation can reinforce family cooperation and gratitude for shared effort."},
      {"time": "7:00 PM", "title": "Family Bath and Relaxation", "emoji": "\ud83d\udec1", "instruction": "Take a warm bath or shower to relax. If with family, enjoy the evening together in a calm atmosphere.", "meaning": "Evening bathing rituals can reflect the cultural importance of cleanliness, relaxation and family calm."},
      {"time": "8:00 PM", "title": "Evening Study or Hobby", "emoji": "\ud83d\udcda", "instruction": "Spend time on a hobby, studying or reading in a quiet space without distractions.", "meaning": "Focused evening time can encourage self-discipline, continuous learning and personal growth."},
      {"time": "9:30 PM", "title": "Reflect on Consideration", "emoji": "\ud83e\udd14", "instruction": "Think about one moment today when you considered someone else's feelings or needs before your own.", "meaning": "Reflecting on awareness of others can reinforce empathy, social connection and a harmonious mindset."},
    ]
  },
  /* ===== INDIA ===== */
  {
    id: "india",
    name: "India",
    flag: "\ud83c\uddee\ud83c\uddf3",
    background: "Indian culture across its diverse regions often centres on family ties, community gatherings, rich food traditions, respect for elders, and spiritual reflection. Hospitality and togetherness are commonly valued.",
    focus: "Family, community, food traditions, respect and spirituality.",
    identity: "Indian lifestyle habits can shape identity through family roles, community belonging, shared traditions and respect.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Prayer or Meditation", "emoji": "\ud83e\ude94", "instruction": "Begin the day with prayer, meditation or quiet reflection for 10 minutes. Light a candle or incense if possible.", "meaning": "Morning spiritual practice can centre the mind and connect personal values to daily actions."},
      {"time": "6:30 AM", "title": "Yoga or Stretching", "emoji": "\ud83e\uddd8", "instruction": "Practise yoga poses, gentle stretching or deep breathing exercises for 20 minutes.", "meaning": "Yoga can reflect the ancient cultural value of balancing body, mind and spirit in daily life."},
      {"time": "7:00 AM", "title": "Oil Massage or Self-Care", "emoji": "\ud83c\udf3f", "instruction": "Apply warm oil to your hair or skin as part of morning self-care, or simply wash your face with intention.", "meaning": "Self-care rituals can reflect respect for the body as a vessel and the value of daily nourishment."},
      {"time": "7:30 AM", "title": "Traditional Breakfast", "emoji": "\ud83e\uded3", "instruction": "Enjoy a traditional breakfast such as idli, dosa, paratha or fruit. Eat with family if possible.", "meaning": "Traditional food can connect people to heritage, family memory and cultural identity through shared taste."},
      {"time": "8:00 AM", "title": "Respectful Greetings to Elders", "emoji": "\ud83d\ude4f", "instruction": "Greet family members with a namaste or warm words to elders. Touch their feet or ask for blessings if appropriate.", "meaning": "Respectful greetings may reinforce family bonds, intergenerational care and the value of elder wisdom."},
      {"time": "8:30 AM", "title": "Share Chai and Conversation", "emoji": "\u2615", "instruction": "Sit with family for a cup of chai or tea before everyone leaves. Talk about the day ahead.", "meaning": "Shared morning tea can create regular space for family dialogue and emotional closeness."},
      {"time": "9:00 AM", "title": "Focused Academic or Work Time", "emoji": "\u270f\ufe0f", "instruction": "Dedicate an hour to studying, reading or working on a skill with full concentration.", "meaning": "Dedicated learning time can reflect the deep cultural value placed on education, curiosity and self-improvement."},
      {"time": "9:30 AM", "title": "Snack Break with Fruits or Nuts", "emoji": "\ud83c\udf4c", "instruction": "Eat a healthy snack such as fresh fruit, nuts or a small sweet. Share it with someone nearby.", "meaning": "Sharing snacks can reinforce generosity and the cultural importance of hospitality in daily life."},
      {"time": "10:00 AM", "title": "Visit or Call a Relative", "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", "instruction": "Call, message or visit a relative you have not seen recently. Ask about their wellbeing sincerely.", "meaning": "Maintaining extended family connections can reinforce loyalty, care and the wide circle of family love."},
      {"time": "10:30 AM", "title": "Learn from Elders", "emoji": "\ud83d\udcd6", "instruction": "Ask a parent, grandparent or elder to teach you a story, recipe, song or skill from their experience.", "meaning": "Learning from elders can preserve cultural memory and strengthen intergenerational connection."},
      {"time": "11:00 AM", "title": "Help in the Kitchen", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Help prepare lunch by chopping vegetables, grinding spices or setting the table alongside family.", "meaning": "Cooking together can reinforce cooperation, shared cultural knowledge and the joy of creating together."},
      {"time": "12:00 PM", "title": "Shared Vegetarian or Varied Lunch", "emoji": "\ud83c\udf5b", "instruction": "Eat lunch with rice, bread and a variety of dishes. Share food and wait for elders to begin eating first.", "meaning": "Shared meals with variety can reflect hospitality, generosity and the cultural importance of communal dining."},
      {"time": "1:00 PM", "title": "Afternoon Siesta or Reading", "emoji": "\ud83d\udcda", "instruction": "Rest for 20-30 minutes, read a book, or listen to calming music to recharge your energy.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and adapting daily rhythm to natural conditions."},
      {"time": "2:00 PM", "title": "Music, Dance or Art Practice", "emoji": "\ud83c\udfb5", "instruction": "Listen to classical music, practise a dance step, draw rangoli or engage in a cultural art form.", "meaning": "Cultural arts can foster joy, emotional expression and connection to heritage."},
      {"time": "3:00 PM", "title": "Walk in Nature or Garden", "emoji": "\ud83c\udf3a", "instruction": "Walk in a garden, park or neighbourhood. Observe plants, birds and the natural beauty around you.", "meaning": "Observing nature can strengthen environmental connection, patience and mindful awareness."},
      {"time": "4:00 PM", "title": "Evening Tea with Neighbours", "emoji": "\ud83c\udf75", "instruction": "Share tea and snacks with neighbours, family or friends. Discuss community events and daily life.", "meaning": "Afternoon social tea can create regular space for community dialogue and mutual support."},
      {"time": "5:30 PM", "title": "Evening Prayer or Aarti", "emoji": "\ud83d\udd49\ufe0f", "instruction": "Participate in evening prayer, light a lamp, or sit quietly in gratitude as the day ends.", "meaning": "Evening spiritual practice can provide inner peace and connect daily life to deeper values."},
      {"time": "7:00 PM", "title": "Family Dinner with Stories", "emoji": "\ud83c\udf72", "instruction": "Eat dinner with family. Share stories from the day and listen to what others experienced.", "meaning": "Shared evening meals with stories can reinforce family bonds and pass down cultural memory."},
      {"time": "8:00 PM", "title": "Board Games or Family Time", "emoji": "\ud83c\udfb2", "instruction": "Play a board game, cards or watch a movie with family. Laugh and enjoy being together.", "meaning": "Evening family time can strengthen emotional bonds and create a sense of belonging."},
      {"time": "9:30 PM", "title": "Gratitude and Reflection", "emoji": "\ud83d\udc90", "instruction": "Express gratitude to someone in your family or community. Thank them for something specific they did today.", "meaning": "Gratitude may reinforce positive relationships, appreciation and a deep sense of belonging."},
    ]
  },
  /* ===== SINGAPORE ===== */
  {
    id: "singapore",
    name: "Singapore",
    flag: "\ud83c\uddf8\ud83c\uddec",
    background: "Singapore is known for its multicultural society where people from different ethnic and religious backgrounds live together. Respect for diversity, efficient public life, and food culture are central to daily experiences.",
    focus: "Multiculturalism, food diversity, respect, efficiency and social harmony.",
    identity: "Singaporean daily habits can shape identity by encouraging multicultural awareness, respect for diversity and social harmony.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Walk in the Park", "emoji": "\ud83c\udf05", "instruction": "Take a walk in a nearby park or neighbourhood. Observe the sunrise and greenery around you.", "meaning": "Morning walks can reflect appreciation for nature, health and an active start to the day."},
      {"time": "6:30 AM", "title": "Light Exercise or Stretching", "emoji": "\ud83c\udfc3", "instruction": "Do light stretching, jogging or calisthenics for 20 minutes to energise your body.", "meaning": "Morning exercise can reflect discipline and the value of physical health in a busy city."},
      {"time": "7:00 AM", "title": "Shower and Dress Neatly", "emoji": "\ud83e\uddfc", "instruction": "Take a refreshing shower and dress neatly for the day. Present yourself with confidence.", "meaning": "Personal grooming can reflect self-respect and professionalism in public life."},
      {"time": "7:30 AM", "title": "Kaya Toast or Local Breakfast", "emoji": "\ud83c\udf5e", "instruction": "Enjoy a local breakfast such as kaya toast, soft-boiled eggs or noodles. Notice the mix of flavours.", "meaning": "Local food can reflect the blending of cultures and shared culinary heritage."},
      {"time": "8:00 AM", "title": "Greet in Multiple Languages", "emoji": "\ud83d\udc4b", "instruction": "Greet people warmly in English, Mandarin, Malay or Tamil. Use their preferred greeting style.", "meaning": "Multilingual greetings may reflect inclusivity and respect for Singapore's diverse communities."},
      {"time": "8:30 AM", "title": "Check Public Transport App", "emoji": "\ud83d\ude87", "instruction": "Plan your route and check the transport app. Be punctual and respect queuing rules.", "meaning": "Efficiency and punctuality may show respect for collective systems and others' time."},
      {"time": "9:00 AM", "title": "Collaborative Morning Work", "emoji": "\ud83d\udcbc", "instruction": "Start your work or study session. Collaborate openly with people from different backgrounds.", "meaning": "Collaboration across differences can reflect the strength of multicultural teamwork."},
      {"time": "9:30 AM", "title": "Coffee Break with Colleagues", "emoji": "\u2615", "instruction": "Take a coffee break with classmates or colleagues. Discuss hobbies or weekend plans.", "meaning": "Social breaks can build relationships across cultural boundaries in shared spaces."},
      {"time": "10:00 AM", "title": "Observe Public Courtesy", "emoji": "\ud83e\udd1d", "instruction": "Queue properly, offer your seat to someone in need, or keep shared spaces clean.", "meaning": "Public courtesy can reflect responsibility for collective wellbeing and social harmony."},
      {"time": "10:30 AM", "title": "Learn a Word in Another Language", "emoji": "\ud83d\udde3\ufe0f", "instruction": "Learn one greeting or phrase in Malay, Tamil, Mandarin or another language spoken locally.", "meaning": "Language curiosity can build bridges between communities and foster mutual respect."},
      {"time": "11:00 AM", "title": "Hawker Centre Visit", "emoji": "\ud83e\udd61", "instruction": "Visit a hawker centre and try a dish from a different culture. Chat with the vendor.", "meaning": "Food exploration can encourage openness and appreciation for cultural diversity."},
      {"time": "12:00 PM", "title": "Mixed-Culture Lunch", "emoji": "\ud83c\udf5c", "instruction": "Eat lunch with friends from different backgrounds. Share dishes and talk about your cultures.", "meaning": "Shared multicultural meals can strengthen social cohesion and broaden perspectives."},
      {"time": "1:00 PM", "title": "Quiet Reading or Nap", "emoji": "\ud83d\udcd6", "instruction": "Rest for 20 minutes, read a book, or listen to music in a quiet corner.", "meaning": "Afternoon rest can support mental clarity and balance in a fast-paced environment."},
      {"time": "2:00 PM", "title": "Community Service or Volunteering", "emoji": "\ud83e\udd32", "instruction": "Do one small act of service: pick up litter, help a stranger, or tutor a peer.", "meaning": "Community service can reflect social responsibility and care for the shared urban environment."},
      {"time": "3:00 PM", "title": "Visit a Cultural Neighbourhood", "emoji": "\ud83c\udfd9\ufe0f", "instruction": "Walk through Little India, Chinatown, Kampong Glam or another cultural district.", "meaning": "Exploring cultural districts can deepen appreciation for the city's multicultural fabric."},
      {"time": "4:00 PM", "title": "Share a Snack with Someone New", "emoji": "\ud83c\udf6a", "instruction": "Buy a snack and share it with a classmate, colleague or neighbour you do not know well.", "meaning": "Small acts of sharing can break down social barriers and create unexpected friendships."},
      {"time": "5:30 PM", "title": "Cook a Dish from Another Culture", "emoji": "\ud83c\udf73", "instruction": "Help prepare or cook a dish from a culture different from your own at home.", "meaning": "Cooking across cultures can foster curiosity, respect and shared domestic joy."},
      {"time": "7:00 PM", "title": "Family Dinner Discussion", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat dinner with family and discuss one thing you learned from a different culture today.", "meaning": "Family dialogue about diversity can build empathy and appreciation from an early age."},
      {"time": "8:00 PM", "title": "Evening Walk by the Water", "emoji": "\ud83c\udf0a", "instruction": "Walk near a river, beach or reservoir. Enjoy the city lights and cool evening breeze.", "meaning": "Evening walks can provide calm reflection and appreciation for urban nature."},
      {"time": "9:30 PM", "title": "Reflect on Diversity", "emoji": "\ud83c\udf0f", "instruction": "Think about one thing you learned today from interacting with a different culture or perspective.", "meaning": "Reflection on diversity can build empathy, challenge assumptions and broaden personal identity."},
    ]
  },
  /* ===== SOUTH KOREA ===== */
  {
    id: "south-korea",
    name: "South Korea",
    flag: "\ud83c\uddf0\ud83c\uddf7",
    background: "South Korean culture in many contexts emphasises respect for hierarchy, strong group identity, dedication to study or work, and sharing food as a social act. Politeness and effort are often highly valued.",
    focus: "Respect, group identity, study/work effort, food sharing and social hierarchy.",
    identity: "South Korean daily habits can shape identity through respect, effort, group belonging and awareness of social roles.",
    tasks: [
      {"time": "6:00 AM", "title": "Rise and Fresh Air", "emoji": "\ud83c\udf05", "instruction": "Wake up, open your window and take five deep breaths of fresh morning air.", "meaning": "Morning fresh air can reflect mindfulness and preparation for a disciplined day."},
      {"time": "6:30 AM", "title": "Morning Exercise Routine", "emoji": "\ud83c\udfc3", "instruction": "Do light stretching, jogging or follow a home workout video for 20 minutes.", "meaning": "Morning exercise can reflect discipline and the cultural value of maintaining physical health."},
      {"time": "7:00 AM", "title": "Wash and Dress Neatly", "emoji": "\ud83e\uddfc", "instruction": "Wash your face, brush your teeth and dress neatly. Pay attention to your appearance.", "meaning": "Personal grooming can reflect self-respect and care for how you present yourself socially."},
      {"time": "7:30 AM", "title": "Korean-Style Breakfast", "emoji": "\ud83c\udf72", "instruction": "Have breakfast with rice, soup, egg or fruit. Eat at the table with family rather than on the go.", "meaning": "A structured breakfast can reflect discipline and the importance of starting the day with family care."},
      {"time": "8:00 AM", "title": "Use Polite Language", "emoji": "\ud83d\ude47", "instruction": "Use polite language and a respectful posture when speaking with older people or teachers today.", "meaning": "Polite speech and posture may reflect awareness of social roles and deep respect for hierarchy."},
      {"time": "8:30 AM", "title": "Organise Your Bag and Plan", "emoji": "\ud83c\udf92", "instruction": "Check your schedule, pack your bag neatly and prepare everything you need for the day.", "meaning": "Preparation can reflect organisational values and respect for your own commitments."},
      {"time": "9:00 AM", "title": "Group Study or Collaborative Work", "emoji": "\ud83d\udc65", "instruction": "Study or work alongside classmates or colleagues. Share notes and explain concepts to each other.", "meaning": "Group effort can reflect the cultural value of collective success and mutual support in learning."},
      {"time": "9:30 AM", "title": "Mid-Morning Snack Break", "emoji": "\ud83c\udf6a", "instruction": "Eat a small healthy snack and drink water. Chat with a friend about non-academic topics.", "meaning": "Social breaks can maintain peer connections and mental freshness during focused work."},
      {"time": "10:00 AM", "title": "Respectful Classroom or Office Behaviour", "emoji": "\ud83c\udf93", "instruction": "Arrive on time, listen attentively, and avoid using your phone during meetings or classes.", "meaning": "Respectful behaviour in shared spaces can reflect awareness of group needs and social order."},
      {"time": "10:30 AM", "title": "Practise a K-Pop Dance or Song", "emoji": "\ud83c\udfb5", "instruction": "Learn a short K-pop dance move or practise singing a Korean song for fun.", "meaning": "Music and dance can foster joy, cultural expression and emotional release."},
      {"time": "11:00 AM", "title": "Prepare Side Dishes for Lunch", "emoji": "\ud83e\udd62", "instruction": "Help prepare banchan (side dishes) or set the table for the upcoming meal.", "meaning": "Preparing shared food can reflect care for family and appreciation of communal dining."},
      {"time": "12:00 PM", "title": "Share Side Dishes at Lunch", "emoji": "\ud83c\udf5b", "instruction": "During lunch, share side dishes with others. Offer food before taking for yourself.", "meaning": "Food sharing can reinforce group belonging, generosity and mutual care in relationships."},
      {"time": "1:00 PM", "title": "Power Nap or Quiet Time", "emoji": "\ud83d\ude34", "instruction": "Take a 15-20 minute nap or sit quietly with your eyes closed to recharge.", "meaning": "Short rest can reflect wisdom about maintaining energy and focus throughout a demanding day."},
      {"time": "2:00 PM", "title": "Focused Individual Study", "emoji": "\ud83d\udcda", "instruction": "Spend 45 minutes in focused study or skill practice. Turn off distractions and push through difficulty.", "meaning": "Concentrated effort can reflect cultural values of perseverance, diligence and self-improvement."},
      {"time": "3:00 PM", "title": "Outdoor Walk or Stretch", "emoji": "\ud83c\udf33", "instruction": "Go for a walk outside or do desk stretches. Take care of your physical health.", "meaning": "Physical care can reflect the belief that a healthy body supports a focused mind and strong work ethic."},
      {"time": "4:00 PM", "title": "Check on a Friend", "emoji": "\ud83d\udcac", "instruction": "Message or call a friend to ask how their day is going. Offer encouragement if they are stressed.", "meaning": "Checking on friends can reinforce social bonds and the cultural value of emotional support."},
      {"time": "5:30 PM", "title": "Help Cook Dinner", "emoji": "\ud83c\udf73", "instruction": "Assist with cooking dinner: wash rice, chop vegetables or prepare simple dishes.", "meaning": "Contributing to family meals can reinforce cooperation and gratitude for shared effort."},
      {"time": "7:00 PM", "title": "Family Dinner and Update", "emoji": "\ud83d\udcac", "instruction": "Have dinner with family and share one success and one challenge from your day. Listen to everyone.", "meaning": "Sharing daily experiences may strengthen family bonds and create a support system for growth."},
      {"time": "8:00 PM", "title": "Watch a Korean Drama or Show", "emoji": "\ud83d\udcfa", "instruction": "Watch an episode of a Korean drama, variety show or documentary with family.", "meaning": "Shared entertainment can strengthen family bonds and create common cultural reference points."},
      {"time": "9:30 PM", "title": "Reflect on Group and Self", "emoji": "\ud83e\uddd8", "instruction": "Think about how your actions today affected your group, family or class. Did you contribute positively?", "meaning": "Reflecting on group impact can encourage awareness of interdependence and responsibility to others."},
    ]
  },
  /* ===== THAILAND ===== */
  {
    id: "thailand",
    name: "Thailand",
    flag: "\ud83c\uddf9\ud83c\udded",
    background: "Thai culture often emphasises respect, kindness, and maintaining harmonious social relationships. In many contexts, food is central to community life, and Buddhist values such as mindfulness and compassion can influence daily behaviour.",
    focus: "Respect, kindness, food culture, community harmony and mindfulness.",
    identity: "Thai daily habits can shape identity by encouraging kindness, social harmony, mindfulness and appreciation of shared experiences.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Offering or Gratitude", "emoji": "\ud83c\udf38", "instruction": "Before breakfast, give thanks for your food, family and home. Offer water to a plant or simply smile.", "meaning": "Morning gratitude can cultivate mindfulness and appreciation for simple daily blessings."},
      {"time": "6:30 AM", "title": "Gentle Stretching or Walking", "emoji": "\ud83d\udeb6", "instruction": "Do gentle stretching or take a short walk around your neighbourhood. Greet people you pass.", "meaning": "Morning movement can reflect the value of easing into the day with calm and awareness."},
      {"time": "7:00 AM", "title": "Shower and Fresh Clothes", "emoji": "\ud83e\uddfc", "instruction": "Take a refreshing shower and put on clean, comfortable clothes. Feel fresh for the day.", "meaning": "Personal cleanliness can reflect self-respect and the importance of presenting oneself well."},
      {"time": "7:30 AM", "title": "Warm Thai Breakfast", "emoji": "\ud83c\udf5c", "instruction": "Eat a warm breakfast such as rice porridge, noodles or sticky rice with fruit. Eat slowly.", "meaning": "A warm, nourishing breakfast can reflect the cultural importance of starting the day with energy and mindful care."},
      {"time": "8:00 AM", "title": "Respectful Wai Greeting", "emoji": "\ud83d\ude4f", "instruction": "Greet family or elders with a respectful wai \u2014 palms together, slight bow \u2014 or warm smile.", "meaning": "Respectful morning greetings may set a positive tone and reinforce care for family relationships."},
      {"time": "8:30 AM", "title": "Water the Plants or Feed Animals", "emoji": "\ud83c\udf3f", "instruction": "Water houseplants, feed pets, or tend to a small garden before leaving home.", "meaning": "Caring for living things can reflect compassion, mindfulness and connection to nature."},
      {"time": "9:00 AM", "title": "Mindful Work or Study", "emoji": "\ud83d\udcd6", "instruction": "Begin your work or study with a clear mind. Take three deep breaths before starting.", "meaning": "Mindful beginnings can encourage focus, calm and intentional action throughout the day."},
      {"time": "9:30 AM", "title": "Fruit Snack Break", "emoji": "\ud83c\udf49", "instruction": "Eat fresh fruit such as watermelon, mango or papaya. Share with someone nearby.", "meaning": "Fresh fruit can reflect the tropical abundance and cultural appreciation for natural, healthy food."},
      {"time": "10:00 AM", "title": "Small Act of Kindness", "emoji": "\ud83d\udc9a", "instruction": "Do one small kind act: help a classmate, compliment someone sincerely, or share a snack.", "meaning": "Small acts of kindness may reinforce compassion, positive social connections and community harmony."},
      {"time": "10:30 AM", "title": "Learn a Thai Word or Phrase", "emoji": "\ud83d\udde3\ufe0f", "instruction": "Learn one Thai word or phrase and practise it with a friend or family member.", "meaning": "Language curiosity can deepen cultural appreciation and communication skills."},
      {"time": "11:00 AM", "title": "Prepare Lunch Ingredients", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Help chop vegetables, pound curry paste or prepare rice for the upcoming meal.", "meaning": "Preparing food with care can reflect gratitude for nourishment and the joy of shared cooking."},
      {"time": "12:00 PM", "title": "Shared Communal Lunch", "emoji": "\ud83c\udf5b", "instruction": "Eat lunch together with family, friends or classmates. Share dishes and encourage others to try everything.", "meaning": "Sharing food can strengthen social bonds and reflect the value of communal dining and generosity."},
      {"time": "1:00 PM", "title": "Rest or Meditation", "emoji": "\ud83e\uddd8", "instruction": "Sit quietly for 10 minutes, close your eyes and focus on your breathing. Let go of stress.", "meaning": "Mindful breaks can encourage inner calm, patience and awareness of one's emotional state."},
      {"time": "2:00 PM", "title": "Visit a Temple or Quiet Place", "emoji": "\u26e9\ufe0f", "instruction": "Visit a temple, shrine or quiet park. Observe the architecture and sit in silence for a few minutes.", "meaning": "Visiting sacred spaces can foster spiritual reflection and appreciation for cultural heritage."},
      {"time": "3:00 PM", "title": "Walk Through a Local Market", "emoji": "\ud83c\udfee", "instruction": "Walk through a local market or neighbourhood. Greet shopkeepers and observe daily life.", "meaning": "Being in communal spaces can foster a sense of belonging, social connection and appreciation for local life."},
      {"time": "4:00 PM", "title": "Prepare Afternoon Snacks", "emoji": "\ud83c\udf6a", "instruction": "Prepare or buy a small snack such as Thai desserts, fruit or spring rolls. Share with family.", "meaning": "Afternoon snacks can create small rituals of togetherness and cultural food appreciation."},
      {"time": "5:30 PM", "title": "Help Clean or Cook Dinner", "emoji": "\ud83c\udf72", "instruction": "Help wash vegetables, set the table, or clean up after the evening meal without being asked.", "meaning": "Contributing to family meals can reinforce responsibility, care and the joy of shared effort."},
      {"time": "7:00 PM", "title": "Relaxed Family Dinner", "emoji": "\ud83e\udd57", "instruction": "Eat dinner with family in a relaxed manner. Talk about your day without rushing.", "meaning": "A leisurely family meal can reflect the value of presence, enjoyment and social connection."},
      {"time": "8:00 PM", "title": "Evening Walk or Chat", "emoji": "\ud83c\udf06", "instruction": "Take an evening walk with family or chat on the porch. Enjoy the cooler evening air.", "meaning": "Evening social time can strengthen family bonds and create space for relaxed conversation."},
      {"time": "9:30 PM", "title": "Evening Mindfulness", "emoji": "\ud83c\udf19", "instruction": "Sit quietly, breathe deeply, and reflect on one thing you are grateful for and one kind thing you did today.", "meaning": "Mindful reflection can encourage awareness of daily blessings, kindness given and inner peace."},
    ]
  },
  /* ===== VIETNAM ===== */
  {
    id: "vietnam",
    name: "Vietnam",
    flag: "\ud83c\uddfb\ud83c\uddf3",
    background: "Vietnamese culture often values family loyalty, respect for ancestors, communal eating, and hard work. In many contexts, food preparation is an expression of love, and resilience is celebrated as a national trait.",
    focus: "Family loyalty, respect for ancestors, communal food, hard work and resilience.",
    identity: "Vietnamese daily habits can shape identity through family devotion, respect for heritage, communal bonds and perseverance.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Exercise in the Park", "emoji": "\ud83c\udf05", "instruction": "Wake up and exercise in a nearby park. Many Vietnamese practise tai chi, badminton or jogging at dawn.", "meaning": "Morning exercise can reflect the cultural value of health, community and starting the day with energy."},
      {"time": "6:30 AM", "title": "Tidy Home and Ancestor Altar", "emoji": "\ud83d\udd6f\ufe0f", "instruction": "Tidy your home and, if applicable, freshen the flowers or incense at the family ancestor altar.", "meaning": "Caring for the ancestor altar can reflect respect for heritage and the continuity of family memory."},
      {"time": "7:00 AM", "title": "Wash and Prepare for Day", "emoji": "\ud83e\uddfc", "instruction": "Take a quick shower, dress neatly and comb your hair. Present yourself with care.", "meaning": "Personal grooming can reflect self-respect and the value of cleanliness in daily life."},
      {"time": "7:30 AM", "title": "Pho or Banh Mi Breakfast", "emoji": "\ud83c\udf5c", "instruction": "Eat a Vietnamese breakfast such as pho, banh mi or sticky rice. Enjoy the flavours slowly.", "meaning": "Traditional breakfast can connect people to heritage, regional identity and family culinary traditions."},
      {"time": "8:00 AM", "title": "Respectful Greeting to Family", "emoji": "\ud83d\ude4f", "instruction": "Greet parents and elders with respectful words. Ask about their health and plans for the day.", "meaning": "Respectful greetings may reinforce family bonds, intergenerational care and social harmony."},
      {"time": "8:30 AM", "title": "Plan Your Day's Work", "emoji": "\ud83d\udccb", "instruction": "Review your schedule, set priorities and prepare what you need. Approach tasks with diligence.", "meaning": "Planning can reflect the cultural value of hard work, organisation and purposeful living."},
      {"time": "9:00 AM", "title": "Focused Morning Work", "emoji": "\u270f\ufe0f", "instruction": "Dedicate an hour to focused study or work. Avoid distractions and give your full effort.", "meaning": "Concentrated effort can reflect the cultural emphasis on perseverance, diligence and achievement."},
      {"time": "9:30 AM", "title": "Tea Break with Friends", "emoji": "\ud83c\udf75", "instruction": "Take a break with green tea or coffee. Chat with friends about life, dreams or weekend plans.", "meaning": "Social breaks can maintain relationships and reflect the importance of community in daily life."},
      {"time": "10:00 AM", "title": "Visit or Call a Relative", "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", "instruction": "Call an aunt, uncle or grandparent. Ask about their wellbeing and share news from your life.", "meaning": "Maintaining extended family ties can reinforce loyalty, care and the wide circle of family love."},
      {"time": "10:30 AM", "title": "Practise a Traditional Craft", "emoji": "\ud83c\udf8b", "instruction": "Try making paper lanterns, practising Vietnamese calligraphy, or learning a folk song.", "meaning": "Traditional crafts can preserve cultural memory and strengthen personal connection to heritage."},
      {"time": "11:00 AM", "title": "Shop for Fresh Ingredients", "emoji": "\ud83e\udd6c", "instruction": "Visit a local market to buy fresh herbs, vegetables and protein for lunch. Bargain politely.", "meaning": "Market shopping can reflect appreciation for fresh food, seasonal eating and community relationships."},
      {"time": "12:00 PM", "title": "Communal Family Lunch", "emoji": "\ud83c\udf72", "instruction": "Eat lunch with family around a shared table. Serve elders first and encourage everyone to eat their fill.", "meaning": "Communal eating can strengthen bonds, reflect generosity and embody shared cultural identity."},
      {"time": "1:00 PM", "title": "Afternoon Nap or Rest", "emoji": "\ud83d\ude0c", "instruction": "Take a 20-30 minute nap or rest quietly. Escape the midday heat and recharge your energy.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and adapting daily rhythm to natural conditions."},
      {"time": "2:00 PM", "title": "Learn About Vietnamese History", "emoji": "\ud83d\udcd6", "instruction": "Read about a historical event, figure or region of Vietnam. Share what you learned with someone.", "meaning": "Learning about history can strengthen cultural pride, identity and appreciation for resilience."},
      {"time": "3:00 PM", "title": "Walk or Cycle Around Neighbourhood", "emoji": "\ud83d\udeb2", "instruction": "Take a walk or cycle through your neighbourhood. Observe the street life and greet neighbours.", "meaning": "Neighbourhood walks can foster community belonging, social connection and appreciation for local life."},
      {"time": "4:00 PM", "title": "Prepare Spring Rolls or Snacks", "emoji": "\ud83c\udf2f", "instruction": "Help prepare spring rolls, fruit or snacks for the family. Involve younger siblings if possible.", "meaning": "Cooking together can reinforce cooperation, shared cultural knowledge and family joy."},
      {"time": "5:30 PM", "title": "Help Cook the Evening Meal", "emoji": "\ud83c\udf73", "instruction": "Assist with cooking dinner: chop herbs, stir-fry vegetables or prepare rice alongside family.", "meaning": "Contributing to meals can reinforce family cooperation and gratitude for shared nourishment."},
      {"time": "7:00 PM", "title": "Family Dinner and Story Sharing", "emoji": "\ud83e\udd62", "instruction": "Eat dinner with family. Share stories, jokes or memories from the day or past experiences.", "meaning": "Evening conversation can strengthen family bonds and pass down cultural memory across generations."},
      {"time": "8:00 PM", "title": "Watch a Vietnamese Film or Show", "emoji": "\ud83d\udcfa", "instruction": "Watch a Vietnamese movie, drama or documentary with family. Discuss the story afterwards.", "meaning": "Shared media can create common cultural experiences and strengthen family connections."},
      {"time": "9:30 PM", "title": "Gratitude and Tomorrow's Plan", "emoji": "\ud83d\udcdd", "instruction": "Reflect on one thing you are grateful for and one goal for tomorrow. Thank a family member before bed.", "meaning": "Reflection can strengthen gratitude, purpose and awareness of how family shapes daily life."},
    ]
  },
  /* ===== INDONESIA ===== */
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "\ud83c\uddee\ud83c\udde9",
    background: "Indonesian culture across its thousands of islands often values communal living, religious devotion, respect for elders, and rich culinary diversity. In many contexts, gotong royong (mutual cooperation) shapes how communities work together.",
    focus: "Communal living, religious devotion, respect for elders, culinary diversity and mutual cooperation.",
    identity: "Indonesian daily habits can shape identity through community cooperation, spiritual practice, respect and cultural diversity.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Prayer or Spiritual Practice", "emoji": "\ud83d\udd4c", "instruction": "Begin the day with prayer, meditation or spiritual reflection according to your faith. Express gratitude.", "meaning": "Morning spiritual practice can centre the soul and connect daily life to deeper values and purpose."},
      {"time": "6:30 AM", "title": "Morning Walk or Light Exercise", "emoji": "\ud83c\udf34", "instruction": "Take a walk around your neighbourhood or do light stretching. Greet neighbours warmly as you pass.", "meaning": "Morning walks can reflect appreciation for community, health and connection to the tropical environment."},
      {"time": "7:00 AM", "title": "Bathe and Dress Modestly", "emoji": "\ud83e\uddfc", "instruction": "Take a thorough shower and dress in clean, modest clothing. Present yourself with respect.", "meaning": "Personal cleanliness and modesty can reflect self-respect and cultural values of propriety."},
      {"time": "7:30 AM", "title": "Nasi Goreng or Traditional Breakfast", "emoji": "\ud83c\udf73", "instruction": "Eat a traditional breakfast such as nasi goreng, bubur or fresh fruit. Share with family if possible.", "meaning": "Traditional food can connect people to regional heritage, family memory and culinary identity."},
      {"time": "8:00 AM", "title": "Respectful Family Greeting", "emoji": "\ud83d\ude4f", "instruction": "Greet parents and elders with a respectful gesture or warm words. Ask for their blessing or advice.", "meaning": "Respectful greetings may reinforce family bonds, intergenerational care and the wisdom of elders."},
      {"time": "8:30 AM", "title": "Prepare for School or Work", "emoji": "\ud83c\udf92", "instruction": "Organise your belongings, check your schedule and leave with a positive attitude. Be punctual.", "meaning": "Preparation can reflect discipline, respect for commitments and organisational values."},
      {"time": "9:00 AM", "title": "Focused Study or Work Session", "emoji": "\ud83d\udcda", "instruction": "Spend an hour in focused study or work. Minimise distractions and give your full attention.", "meaning": "Dedicated effort can reflect the cultural value of hard work, persistence and self-improvement."},
      {"time": "9:30 AM", "title": "Share a Snack Break", "emoji": "\ud83c\udf4c", "instruction": "Eat a healthy snack with friends or colleagues. Share what you have and enjoy the moment together.", "meaning": "Sharing snacks can reinforce generosity, hospitality and the joy of communal eating."},
      {"time": "10:00 AM", "title": "Community Check-In", "emoji": "\ud83e\udd1d", "instruction": "Visit, call or message a neighbour or community member. Ask if they need help with anything.", "meaning": "Checking in with others may reinforce gotong royong, empathy and the extended family spirit."},
      {"time": "10:30 AM", "title": "Learn About Another Island Culture", "emoji": "\ud83c\udf0f", "instruction": "Read or watch something about a different Indonesian island, language or tradition.", "meaning": "Learning about diversity can build national unity while respecting regional uniqueness."},
      {"time": "11:00 AM", "title": "Help Prepare Lunch", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Assist with preparing lunch: grind spices, chop vegetables or set the table with family.", "meaning": "Cooking together can reinforce cooperation, shared cultural knowledge and the joy of creating together."},
      {"time": "12:00 PM", "title": "Shared Communal Lunch", "emoji": "\ud83c\udf5b", "instruction": "Eat lunch with family or friends from shared plates. Encourage others to eat their fill first.", "meaning": "Communal eating can strengthen bonds, reflect generosity and embody shared cultural identity."},
      {"time": "1:00 PM", "title": "Rest or Quranic Reading", "emoji": "\ud83d\udcd6", "instruction": "Rest quietly, read religious texts, or listen to calming music to recharge in the afternoon heat.", "meaning": "Afternoon spiritual reading can provide inner peace and connect faith to daily rhythm."},
      {"time": "2:00 PM", "title": "Traditional Dance or Music Practice", "emoji": "\ud83c\udfb5", "instruction": "Practise a traditional dance, play a gamelan instrument, or listen to regional music.", "meaning": "Traditional arts can foster joy, cultural pride and connection to Indonesia's rich heritage."},
      {"time": "3:00 PM", "title": "Walk in Nature or Rice Fields", "emoji": "\ud83c\udf3e", "instruction": "Walk near rice fields, a beach, forest or garden. Observe the natural beauty of the landscape.", "meaning": "Nature observation can strengthen environmental connection and appreciation for the land."},
      {"time": "4:00 PM", "title": "Gotong Royong \u2014 Community Task", "emoji": "\ud83e\uddf9", "instruction": "Join a communal cleaning, gardening or repair task in your neighbourhood or home.", "meaning": "Gotong royong can reinforce cooperation, shared responsibility and the satisfaction of collective achievement."},
      {"time": "5:30 PM", "title": "Evening Prayer and Family Time", "emoji": "\ud83d\udd6f\ufe0f", "instruction": "Participate in evening prayer or spiritual practice. Then gather with family before dinner.", "meaning": "Evening spiritual practice can provide peace and strengthen family unity through shared faith."},
      {"time": "7:00 PM", "title": "Family Dinner with Conversation", "emoji": "\ud83c\udf72", "instruction": "Eat dinner with family. Discuss community news, family stories and each person's day.", "meaning": "Shared evening meals can reinforce family bonds, community identity and mutual emotional support."},
      {"time": "8:00 PM", "title": "Evening Walk or Social Visit", "emoji": "\ud83c\udf19", "instruction": "Take an evening walk or visit a neighbour's home. Chat about life and share laughter.", "meaning": "Evening social visits can strengthen neighbourly bonds and create a sense of communal belonging."},
      {"time": "9:30 PM", "title": "Gratitude and Reflection", "emoji": "\ud83d\udcad", "instruction": "Think about one blessing from today and one way you practised gotong royong or kindness.", "meaning": "Reflection can build gratitude, awareness of community support and commitment to mutual care."},
    ]
  },
  /* ===== FRANCE ===== */
  {
    id: "france",
    name: "France",
    flag: "\ud83c\uddeb\ud83c\uddf7",
    background: "French culture often places great value on enjoying food, expressing opinions, and building social connections through conversation. Daily life in some contexts may revolve around meals and dialogue.",
    focus: "Food culture, conversation, social connection and personal expression.",
    identity: "French lifestyle habits can shape identity by encouraging social confidence, conversation and appreciation of daily life.",
    tasks: [
      {"time": "6:00 AM", "title": "Gentle Wake-Up with Coffee", "emoji": "\u2615", "instruction": "Wake up slowly. Make a coffee or hot chocolate and enjoy it by a window without rushing.", "meaning": "A slow morning can reflect an appreciation for comfort, daily rhythm and starting the day with pleasure."},
      {"time": "6:30 AM", "title": "Light Stretching or Walk", "emoji": "\ud83d\udeb6", "instruction": "Do gentle stretching or take a short walk. Notice the morning light and sounds of the neighbourhood.", "meaning": "Morning movement can cultivate awareness of surroundings and appreciation for everyday beauty."},
      {"time": "7:00 AM", "title": "Shower and Dress with Care", "emoji": "\ud83e\uddfc", "instruction": "Take a leisurely shower and choose your outfit with attention to style and comfort.", "meaning": "Personal presentation can reflect self-respect and the cultural value of aesthetic appreciation."},
      {"time": "7:30 AM", "title": "Croissant or Light Breakfast", "emoji": "\ud83e\udd50", "instruction": "Eat a light breakfast of bread, croissant, butter, jam or fruit at the table.", "meaning": "A simple, enjoyable breakfast can be connected to comfort, daily rhythm and cultural identity."},
      {"time": "8:00 AM", "title": "Say 'Bonjour' to Everyone", "emoji": "\ud83d\udc4b", "instruction": "Greet shopkeepers, neighbours, teachers and classmates with 'Bonjour' and a friendly look.", "meaning": "A warm greeting may reflect the cultural importance of acknowledging others and building polite social bonds."},
      {"time": "8:30 AM", "title": "Read News or a Book", "emoji": "\ud83d\udcf0", "instruction": "Spend 15 minutes reading a newspaper, article or book. Stay informed and cultivate your mind.", "meaning": "Reading can reflect intellectual curiosity and the value of being an informed, engaged citizen."},
      {"time": "9:00 AM", "title": "Express an Opinion", "emoji": "\ud83d\udcad", "instruction": "In a class discussion or conversation, share your honest opinion on a topic. Support your view with reasons.", "meaning": "Expressing opinions openly can encourage self-confidence, critical thinking and authentic personal identity."},
      {"time": "9:30 AM", "title": "Coffee Break with a Friend", "emoji": "\u2615", "instruction": "Meet a friend or colleague for a coffee. Discuss ideas, art, politics or personal interests.", "meaning": "Conversation over coffee can strengthen social connections and build confidence in expressing yourself."},
      {"time": "10:00 AM", "title": "Write or Journal", "emoji": "\u270d\ufe0f", "instruction": "Write down your thoughts, observations or a short poem. Express yourself honestly on paper.", "meaning": "Writing can encourage self-awareness, creativity and clarity of personal values."},
      {"time": "10:30 AM", "title": "Visit a Local Market", "emoji": "\ud83c\udf45", "instruction": "Visit a local shop, market or bakery. Choose fresh ingredients and chat with the vendor.", "meaning": "Shopping locally can reflect appreciation for fresh food, community connection and personal relationships."},
      {"time": "11:00 AM", "title": "Prepare Lunch Ingredients", "emoji": "\ud83e\udd56", "instruction": "Help select and prepare fresh ingredients for lunch. Enjoy the colours and aromas.", "meaning": "Food preparation can reflect the cultural value of taking pleasure in daily rituals."},
      {"time": "12:00 PM", "title": "Long Lunch Without Screens", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Sit down for lunch without your phone. Enjoy the flavours, textures and colours of your meal.", "meaning": "Taking time to eat mindfully can reflect an appreciation for daily life and presence in the moment."},
      {"time": "1:00 PM", "title": "Afternoon Stroll", "emoji": "\ud83c\udf33", "instruction": "Take a leisurely walk after lunch. Digest your meal and enjoy the neighbourhood scenery.", "meaning": "Post-lunch walks can encourage digestion, reflection and appreciation for everyday surroundings."},
      {"time": "2:00 PM", "title": "Debate or Discuss Ideas", "emoji": "\ud83d\udcac", "instruction": "Engage in a respectful debate or deep conversation about a topic you care about.", "meaning": "Intellectual dialogue can reflect the cultural value of critical thinking and expressive communication."},
      {"time": "3:00 PM", "title": "Visit a Museum or Gallery", "emoji": "\ud83c\udfa8", "instruction": "Visit a museum, gallery or historical site. Observe art or artefacts with curiosity.", "meaning": "Engaging with art and history can broaden perspective and deepen cultural appreciation."},
      {"time": "4:00 PM", "title": "Pastry or Afternoon Treat", "emoji": "\ud83c\udf70", "instruction": "Enjoy a small pastry, macaron or fruit tart as an afternoon treat. Savour every bite.", "meaning": "Afternoon treats can reflect the cultural appreciation for small daily pleasures and gastronomy."},
      {"time": "5:30 PM", "title": "Cook Dinner with Fresh Ingredients", "emoji": "\ud83c\udf77", "instruction": "Prepare dinner using fresh, seasonal ingredients. Cook slowly and with attention to flavour.", "meaning": "Cooking with care can reflect self-reliance, creativity and appreciation for quality food."},
      {"time": "7:00 PM", "title": "Family or Friend Dinner", "emoji": "\ud83e\udd58", "instruction": "Have dinner with family or friends. Engage in meaningful conversation about ideas and experiences.", "meaning": "Shared evening meals with dialogue may reinforce social bonds and the value of togetherness."},
      {"time": "8:00 PM", "title": "Evening Walk or Cafe", "emoji": "\ud83c\udf06", "instruction": "Take a relaxed evening walk or sit at a cafe. Watch people and reflect on your day.", "meaning": "Evening leisure can encourage reflection, social observation and appreciation for urban life."},
      {"time": "9:30 PM", "title": "Write One Observation", "emoji": "\ud83d\udcdd", "instruction": "Write down one observation, opinion or creative thought about something you experienced today.", "meaning": "Expressing thoughts openly can encourage self-awareness, personal identity and communication skill."},
    ]
  },
  /* ===== ITALY ===== */
  {
    id: "italy",
    name: "Italy",
    flag: "\ud83c\uddee\ud83c\uddf9",
    background: "Italian culture often celebrates family connections, the enjoyment of food, lively conversation, and community life. A slower, more social rhythm in daily routines is commonly valued in many contexts.",
    focus: "Family, food, conversation, community and slower social rhythm.",
    identity: "Italian lifestyle habits can shape identity by encouraging family connection, social warmth, community belonging and appreciation of shared meals.",
    tasks: [
      {"time": "6:00 AM", "title": "Slow Morning Start", "emoji": "\u2615", "instruction": "Begin the day calmly. Make a coffee or hot drink and sit by a window without hurrying.", "meaning": "A slow morning can reflect the value of easing into the day with simple pleasures and self-care."},
      {"time": "6:30 AM", "title": "Gentle Walk or Stretch", "emoji": "\ud83d\udeb6", "instruction": "Take a short walk or do light stretching. Breathe in the fresh morning air.", "meaning": "Morning movement can reflect appreciation for nature and a balanced start to the day."},
      {"time": "7:00 AM", "title": "Wash and Dress with Style", "emoji": "\ud83e\uddfc", "instruction": "Shower, groom yourself and choose clothes that make you feel good. Presentation matters.", "meaning": "Personal grooming can reflect self-respect and the cultural value of presenting oneself with pride."},
      {"time": "7:30 AM", "title": "Simple Breakfast with Family", "emoji": "\ud83c\udf5e", "instruction": "Have a simple breakfast of bread, pastry, fruit or coffee. Sit with family and chat briefly.", "meaning": "A simple breakfast with family can reflect the value of starting the day together with connection."},
      {"time": "8:00 AM", "title": "Warm Greeting with Eye Contact", "emoji": "\ud83e\udd17", "instruction": "Greet people warmly when you meet them. Use eye contact, a genuine smile and a friendly word.", "meaning": "Warm greetings with presence may build social trust and convey openness and sincerity."},
      {"time": "8:30 AM", "title": "Plan the Day's Meals", "emoji": "\ud83c\udf45", "instruction": "Think about what you will eat today. Consider fresh ingredients and who you might share meals with.", "meaning": "Meal planning can reflect the cultural importance of food as a central part of daily life."},
      {"time": "9:00 AM", "title": "Focused Morning Work", "emoji": "\u270f\ufe0f", "instruction": "Work or study for an hour with focus. Then reward yourself with a break.", "meaning": "Focused work followed by rest can reflect balance between productivity and enjoyment."},
      {"time": "9:30 AM", "title": "Espresso and Conversation", "emoji": "\u2615", "instruction": "Have an espresso or coffee with a colleague or friend. Talk about life, not just work.", "meaning": "Coffee conversations can maintain relationships and remind people that connection matters."},
      {"time": "10:00 AM", "title": "Visit the Local Market", "emoji": "\ud83e\uddc0", "instruction": "Visit a market, deli or bakery. Choose fresh cheese, bread, vegetables or fruit.", "meaning": "Shopping for fresh food can reflect appreciation for quality ingredients and local producers."},
      {"time": "10:30 AM", "title": "Prepare Fresh Ingredients", "emoji": "\ud83e\udd6c", "instruction": "Wash, chop and prepare fresh vegetables or ingredients for the day's meals.", "meaning": "Food preparation can reflect care, patience and the joy of creating something nourishing."},
      {"time": "11:00 AM", "title": "Cook with Family or Friends", "emoji": "\ud83d\udc68\u200d\ud83c\udf73", "instruction": "Start cooking lunch alongside family or friends. Talk, laugh and taste as you go.", "meaning": "Cooking together can reinforce family closeness, cooperation and the tradition of shared meals."},
      {"time": "12:00 PM", "title": "Long Lunch with Conversation", "emoji": "\ud83c\udf5d", "instruction": "Take your time eating lunch \u2014 at least 45 minutes. Focus on the flavours and the people around you.", "meaning": "A leisurely meal can reflect the value of presence, enjoyment and social connection."},
      {"time": "1:00 PM", "title": "Pausa \u2014 Afternoon Rest", "emoji": "\ud83d\ude0c", "instruction": "Take 20-30 minutes to rest, nap, or read quietly. Allow yourself to pause in the middle of the day.", "meaning": "Afternoon rest can reflect balance, self-care and the understanding that productivity includes renewal."},
      {"time": "2:00 PM", "title": "Walk Through Town", "emoji": "\ud83c\udfdb\ufe0f", "instruction": "Walk through your neighbourhood, a public square or a park. Greet people and enjoy the atmosphere.", "meaning": "Being in communal spaces can strengthen community belonging and social connection."},
      {"time": "3:00 PM", "title": "Gelato or Afternoon Treat", "emoji": "\ud83c\udf66", "instruction": "Enjoy a gelato, pastry or coffee in the afternoon. Sit outside if the weather is nice.", "meaning": "Afternoon treats can create small rituals of pleasure and social observation."},
      {"time": "4:00 PM", "title": "Chat with Neighbours", "emoji": "\ud83d\udcac", "instruction": "Stand outside your home or in a square and chat with neighbours about daily life.", "meaning": "Casual neighbourly conversation can reinforce community bonds and local identity."},
      {"time": "5:30 PM", "title": "Prepare Dinner Together", "emoji": "\ud83c\udf55", "instruction": "Cook dinner with family. Everyone helps with chopping, stirring or setting the table.", "meaning": "Cooking together may reinforce family closeness, cooperation and the tradition of shared meals."},
      {"time": "7:00 PM", "title": "Family Dinner and Stories", "emoji": "\ud83c\udf77", "instruction": "Eat dinner with family and engage in lively conversation. Share stories, opinions and laughter.", "meaning": "Family meals with dialogue may reinforce closeness, intellectual exchange and shared identity."},
      {"time": "8:00 PM", "title": "Passeggiata \u2014 Evening Stroll", "emoji": "\ud83c\udf06", "instruction": "Walk through your neighbourhood or a public square in the evening. Enjoy the social atmosphere.", "meaning": "An evening stroll can strengthen community belonging and appreciation for shared public life."},
      {"time": "9:30 PM", "title": "Reflect on Today", "emoji": "\ud83d\udcad", "instruction": "Think about one good conversation you had, one delicious thing you ate, and one person you connected with.", "meaning": "Reflection can strengthen gratitude, social awareness and appreciation for daily pleasures."},
    ]
  },
  /* ===== SPAIN ===== */
  {
    id: "spain",
    name: "Spain",
    flag: "\ud83c\uddea\ud83c\uddf8",
    background: "Spanish culture often values family closeness, lively social gatherings, and a relaxed approach to daily timing. Meals are frequently shared experiences, and personal connections through conversation are highly cherished in many contexts.",
    focus: "Family, food, social warmth, conversation and relaxed rhythm.",
    identity: "Spanish lifestyle habits can shape identity by encouraging family closeness, social warmth, expressive communication and enjoyment of shared moments.",
    tasks: [
      {"time": "6:00 AM", "title": "Gentle Morning Wake-Up", "emoji": "\ud83c\udf05", "instruction": "Wake up gently, open the shutters and let natural light fill the room.", "meaning": "Morning light can reflect the value of connecting with natural rhythms and starting the day calmly."},
      {"time": "6:30 AM", "title": "Stretch or Short Walk", "emoji": "\ud83d\udeb6", "instruction": "Do light stretching or take a short walk around the block. Greet neighbours you pass.", "meaning": "Morning movement can reflect appreciation for community, health and the neighbourhood."},
      {"time": "7:00 AM", "title": "Wash and Dress", "emoji": "\ud83e\uddfc", "instruction": "Shower, groom yourself and dress comfortably. Take pride in your appearance.", "meaning": "Personal grooming can reflect self-respect and the cultural value of looking presentable."},
      {"time": "7:30 AM", "title": "Light Breakfast with Family", "emoji": "\ud83e\udd56", "instruction": "Have a light breakfast such as toast with tomato, a pastry, fruit or a hot drink with family.", "meaning": "A simple breakfast with family can reflect the value of easing into the day with connection."},
      {"time": "8:00 AM", "title": "Warm Social Greeting", "emoji": "\ud83e\udd17", "instruction": "Greet people you meet with warmth \u2014 use a smile, eye contact, a friendly word or light touch.", "meaning": "Warm greetings may build trust and reflect the cultural value of personal connection."},
      {"time": "8:30 AM", "title": "Plan Social Activities", "emoji": "\ud83d\udcc5", "instruction": "Think about who you will see today. Plan a meal, walk or conversation with friends or family.", "meaning": "Social planning can reflect the cultural importance of relationships in daily life."},
      {"time": "9:00 AM", "title": "Focused Morning Work", "emoji": "\ud83d\udcd6", "instruction": "Work or study for an hour with concentration. Then take a proper break.", "meaning": "Focused work can reflect diligence, while planned breaks reflect balance."},
      {"time": "9:30 AM", "title": "Mid-Morning Social Break", "emoji": "\u2615", "instruction": "Have a drink or snack with a colleague, classmate or friend. Talk about non-work topics.", "meaning": "Social breaks can reinforce relationships and remind people that connection matters."},
      {"time": "10:00 AM", "title": "Visit a Local Cafe", "emoji": "\ud83c\udf6a", "instruction": "Go to a local cafe, order a coffee and observe the social life around you.", "meaning": "Cafe culture can reflect appreciation for public social spaces and casual community interaction."},
      {"time": "10:30 AM", "title": "Help a Neighbour", "emoji": "\ud83e\udd1d", "instruction": "Offer to help a neighbour with a small task: carry groceries, watch children, or chat.", "meaning": "Helping neighbours can reinforce community spirit and the value of mutual support."},
      {"time": "11:00 AM", "title": "Prepare for Long Lunch", "emoji": "\ud83e\udd58", "instruction": "Help prepare ingredients for lunch. Set the table beautifully for a shared meal.", "meaning": "Preparing for shared meals can reflect care for family and appreciation of communal dining."},
      {"time": "12:00 PM", "title": "Long Lunch with Family", "emoji": "\ud83c\udf72", "instruction": "Eat a relaxed lunch with family or friends for at least 45 minutes. Enjoy the conversation.", "meaning": "A leisurely shared meal can strengthen bonds and reflect appreciation for social time."},
      {"time": "1:00 PM", "title": "Siesta or Quiet Rest", "emoji": "\ud83d\ude34", "instruction": "Take 20-30 minutes to rest, nap, read or relax quietly. Recharge your energy.", "meaning": "Afternoon rest can reflect wisdom about balance, health and slowing down in a busy day."},
      {"time": "2:00 PM", "title": "Afternoon Walk", "emoji": "\ud83c\udf07", "instruction": "Take a walk outside. Enjoy the afternoon sun and observe the street life around you.", "meaning": "Afternoon walks can encourage reflection, physical health and appreciation for surroundings."},
      {"time": "3:00 PM", "title": "Snack and Social Time", "emoji": "\ud83c\udf6a", "instruction": "Have an afternoon snack with friends or family. Share something sweet and talk about your plans.", "meaning": "Shared snacks can maintain social connection and create small rituals of togetherness."},
      {"time": "4:00 PM", "title": "Visit Friends or Family", "emoji": "\ud83c\udfe0", "instruction": "Visit a relative or friend's home unexpectedly. Bring a small treat and enjoy their company.", "meaning": "Spontaneous visits can reinforce social bonds and the value of personal presence."},
      {"time": "5:30 PM", "title": "Help Prepare Tapas or Dinner", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Help prepare tapas, chop ingredients or cook alongside family for the evening meal.", "meaning": "Cooking together can reinforce cooperation, shared pleasure and family unity."},
      {"time": "7:00 PM", "title": "Late Family Dinner", "emoji": "\ud83c\udf77", "instruction": "Eat dinner late with family. Share stories, jokes and opinions loudly and with passion.", "meaning": "Evening conversation over dinner may reinforce family closeness and expressive communication."},
      {"time": "8:00 PM", "title": "Evening Stroll", "emoji": "\ud83d\udeb6", "instruction": "Take a relaxed evening walk in your neighbourhood or a nearby plaza. Greet people you know.", "meaning": "An evening stroll can encourage reflection, casual social interaction and connection with surroundings."},
      {"time": "9:30 PM", "title": "Family Conversation Before Bed", "emoji": "\ud83d\udcac", "instruction": "Sit with family and share one highlight from the day. Laugh together before resting.", "meaning": "Evening conversation can reinforce family closeness and the value of shared daily life."},
    ]
  },
  /* ===== GERMANY ===== */
  {
    id: "germany",
    name: "Germany",
    flag: "\ud83c\udde9\ud83c\uddea",
    background: "German culture in many contexts values punctuality, structure, environmental awareness, and direct yet respectful communication. Efficiency and reliability are often appreciated, while community responsibility and outdoor activities play meaningful roles in daily life.",
    focus: "Punctuality, structure, environmental care, direct communication and community responsibility.",
    identity: "German daily habits can shape identity by encouraging reliability, environmental awareness, clear communication and social responsibility.",
    tasks: [
      {"time": "6:00 AM", "title": "Early Rise and Morning Routine", "emoji": "\ud83c\udf05", "instruction": "Wake up at a consistent time, make your bed and open the windows for fresh air.", "meaning": "A structured morning can reflect discipline, reliability and respect for your own time."},
      {"time": "6:30 AM", "title": "Morning Jog or Bike Ride", "emoji": "\ud83d\udeb2", "instruction": "Go for a jog, bike ride or walk outside for 20-30 minutes. Enjoy the fresh air.", "meaning": "Morning outdoor activity can reflect appreciation for nature, physical health and active living."},
      {"time": "7:00 AM", "title": "Shower and Dress Neatly", "emoji": "\ud83e\uddfc", "instruction": "Take a shower, groom yourself and dress neatly. Prepare everything you need for the day.", "meaning": "Personal preparation can reflect self-respect and organisational values."},
      {"time": "7:30 AM", "title": "Hearty Structured Breakfast", "emoji": "\ud83e\udd68", "instruction": "Eat a structured breakfast with bread, cheese, fruit or yoghurt and a hot drink at the table.", "meaning": "A structured morning meal can reflect discipline and the value of starting the day with nourishment."},
      {"time": "8:00 AM", "title": "Be Punctual and Prepared", "emoji": "\u23f0", "instruction": "Arrive on time or slightly early. Bring everything you need and greet people politely.", "meaning": "Punctuality may show respect for others' time and reflect organisational values."},
      {"time": "8:30 AM", "title": "Review Today's Plan", "emoji": "\ud83d\udccb", "instruction": "Review your schedule, set three priorities and plan how you will accomplish them.", "meaning": "Planning can reflect efficiency, goal-orientation and purposeful living."},
      {"time": "9:00 AM", "title": "Focused Work Block", "emoji": "\u270f\ufe0f", "instruction": "Work or study for 50 minutes without interruption. Then take a 10-minute break.", "meaning": "Focused work can reflect efficiency, self-discipline and the value of doing one thing well."},
      {"time": "9:30 AM", "title": "Stand-Up Break", "emoji": "\ud83e\uddcd", "instruction": "Stand up, stretch and walk around for 5-10 minutes. Look out a window.", "meaning": "Regular breaks can support physical health, mental clarity and sustained productivity."},
      {"time": "10:00 AM", "title": "Direct and Clear Communication", "emoji": "\ud83d\udde3\ufe0f", "instruction": "In a conversation, express your thoughts clearly and politely. Avoid vague language.", "meaning": "Direct yet respectful communication may build trust, clarity and mutual understanding."},
      {"time": "10:30 AM", "title": "Recycle and Sort Waste", "emoji": "\u267b\ufe0f", "instruction": "Sort your waste into recycling, compost and general bins. Rinse containers before recycling.", "meaning": "Proper waste sorting can reflect environmental responsibility and care for shared spaces."},
      {"time": "11:00 AM", "title": "Help a Colleague or Classmate", "emoji": "\ud83e\udd1d", "instruction": "Offer help to someone who is struggling with a task. Explain clearly and patiently.", "meaning": "Helping others can reinforce community spirit, cooperation and social responsibility."},
      {"time": "12:00 PM", "title": "Efficient Lunch Break", "emoji": "\ud83e\udd6a", "instruction": "Eat lunch efficiently but enjoyably. Sit down, chew slowly and avoid working while eating.", "meaning": "Taking time to eat can reflect balance between productivity and self-care."},
      {"time": "1:00 PM", "title": "Short Walk After Lunch", "emoji": "\ud83c\udf33", "instruction": "Take a 15-minute walk outside after lunch. Observe the trees, birds or buildings.", "meaning": "Post-lunch walks can aid digestion, mental clarity and connection with the environment."},
      {"time": "2:00 PM", "title": "Second Focus Block", "emoji": "\ud83d\udcda", "instruction": "Return to focused work for another hour. Minimise distractions and track your progress.", "meaning": "Sustained focus can reflect diligence, reliability and commitment to quality work."},
      {"time": "3:00 PM", "title": "Outdoor Break", "emoji": "\ud83c\udfc3", "instruction": "Spend 15 minutes outside: walk, stretch, or simply stand in the fresh air.", "meaning": "Outdoor breaks can restore energy and reflect appreciation for nature."},
      {"time": "4:00 PM", "title": "Tidy Your Workspace", "emoji": "\ud83e\uddf9", "instruction": "Organise your desk, files or room. Return items to their proper places.", "meaning": "Workspace tidiness can reflect orderliness, efficiency and respect for shared environments."},
      {"time": "5:30 PM", "title": "Cook a Simple Healthy Dinner", "emoji": "\ud83c\udf72", "instruction": "Prepare a simple, healthy dinner from fresh ingredients. Follow a recipe carefully.", "meaning": "Cooking from scratch can reflect self-reliance, health consciousness and attention to quality."},
      {"time": "7:00 PM", "title": "Eat Dinner at the Table", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat dinner at the table without screens. Discuss your day with family or housemates.", "meaning": "Shared meals without distractions can strengthen relationships and mindful eating habits."},
      {"time": "8:00 PM", "title": "Evening Walk or Hobby", "emoji": "\ud83c\udf32", "instruction": "Take a walk outside or work on a hobby such as gardening, crafts or music.", "meaning": "Evening hobbies can encourage creativity, relaxation and a balanced lifestyle."},
      {"time": "9:30 PM", "title": "Plan and Reflect", "emoji": "\ud83d\udccb", "instruction": "Think about one thing you accomplished today, one challenge you faced, and one goal for tomorrow.", "meaning": "Reflection and planning may encourage self-discipline, purposeful living and continuous improvement."},
    ]
  },
  /* ===== SWEDEN ===== */
  {
    id: "sweden",
    name: "Sweden",
    flag: "\ud83c\uddf8\ud83c\uddea",
    background: "Swedish culture often emphasises equality, work-life balance, nature connection, and consensus-based decision making. In many contexts, humility, environmental care, and respect for personal space are valued aspects of social life.",
    focus: "Equality, work-life balance, nature connection, humility and consensus.",
    identity: "Swedish daily habits can shape identity by encouraging equality, balance, environmental care and respectful independence.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Light and Fresh Air", "emoji": "\ud83c\udf32", "instruction": "Open your curtains wide, breathe in fresh air from a window, and start the day calmly.", "meaning": "Connecting with natural light and air can reflect appreciation for nature and a balanced start."},
      {"time": "6:30 AM", "title": "Morning Walk or Run", "emoji": "\ud83c\udfc3", "instruction": "Go for a walk or run in a park, forest path or near water. Observe the natural world.", "meaning": "Morning nature time can encourage reflection, calm and physical wellbeing."},
      {"time": "7:00 AM", "title": "Shower and Dress Comfortably", "emoji": "\ud83e\uddfc", "instruction": "Take a shower and dress in comfortable, practical clothes. Functionality matters.", "meaning": "Practical dressing can reflect humility, self-respect and the value of simplicity."},
      {"time": "7:30 AM", "title": "Fika-Style Breakfast", "emoji": "\u2615", "instruction": "Take a calm morning moment with a warm drink and a small snack. Share it with someone if possible.", "meaning": "A mindful break can reflect the value of slowing down, enjoying simple pleasures and connecting."},
      {"time": "8:00 AM", "title": "Respect Personal Space", "emoji": "\ud83e\udd1d", "instruction": "Be mindful of others' personal space and quiet needs. Do not speak loudly in shared areas.", "meaning": "Respecting boundaries may reflect awareness of others and social consideration."},
      {"time": "8:30 AM", "title": "Plan a Balanced Day", "emoji": "\ud83d\udcc5", "instruction": "Review your day and ensure you have time for work, rest, social life and nature.", "meaning": "Daily balance planning can reflect the cultural value of sustainable, healthy living."},
      {"time": "9:00 AM", "title": "Collaborative Morning Work", "emoji": "\ud83d\udc65", "instruction": "Work or study alongside others. Share ideas equally and seek consensus.", "meaning": "Collaborative work can reflect the value of equality, shared decision-making and mutual respect."},
      {"time": "9:30 AM", "title": "First Fika Break", "emoji": "\ud83c\udf6a", "instruction": "Take a coffee break with a colleague or friend. Talk about non-work topics.", "meaning": "Social breaks can maintain relationships and reflect the belief that rest is essential."},
      {"time": "10:00 AM", "title": "Outdoor Task if Possible", "emoji": "\ud83c\udf1e", "instruction": "If possible, do a task outside or near a window with natural light and fresh air.", "meaning": "Connecting with nature during work can support wellbeing and appreciation for the environment."},
      {"time": "10:30 AM", "title": "Listen to All Voices", "emoji": "\ud83d\udc42", "instruction": "In a group discussion, ensure everyone has a chance to speak before making a decision.", "meaning": "Equal participation can reflect the cultural value of democracy, consensus and respect."},
      {"time": "11:00 AM", "title": "Sustainable Choice", "emoji": "\u267b\ufe0f", "instruction": "Make one environmentally conscious choice today: walk instead of drive, reuse something, or recycle.", "meaning": "Environmental choices can reflect responsibility for the planet and future generations."},
      {"time": "12:00 PM", "title": "Outdoor Lunch", "emoji": "\ud83e\udd6a", "instruction": "Eat lunch outside in a park, courtyard or near a window with natural light.", "meaning": "Eating outdoors can reflect the cultural value of connecting with nature during the day."},
      {"time": "1:00 PM", "title": "Short Walk or Rest", "emoji": "\ud83d\udeb6", "instruction": "Take a 15-minute walk or rest quietly. Recharge for the afternoon.", "meaning": "Afternoon rest can support mental clarity, balance and sustained energy."},
      {"time": "2:00 PM", "title": "Focused Afternoon Work", "emoji": "\ud83d\udcd6", "instruction": "Return to work with focus. Work efficiently so you can finish on time.", "meaning": "Efficiency can reflect respect for your own time and the value of work-life balance."},
      {"time": "3:00 PM", "title": "Second Fika Break", "emoji": "\ud83c\udf75", "instruction": "Take another short break with a drink and snack. Chat with someone about their weekend plans.", "meaning": "Regular social breaks can maintain relationships and reflect sustainable work rhythms."},
      {"time": "4:00 PM", "title": "Tidy Shared Spaces", "emoji": "\ud83e\uddf9", "instruction": "Clean a shared area at home, school or work. Leave it better than you found it.", "meaning": "Caring for shared spaces can reflect collective responsibility and consideration for others."},
      {"time": "5:30 PM", "title": "Cook a Simple Healthy Meal", "emoji": "\ud83c\udf72", "instruction": "Cook a simple, healthy dinner with fresh ingredients. Keep it uncomplicated and nourishing.", "meaning": "Simple home cooking can reflect self-sufficiency, health consciousness and shared domestic life."},
      {"time": "7:00 PM", "title": "Family or Housemate Dinner", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat dinner with family or housemates. Discuss your days and make decisions together.", "meaning": "Shared meals with consensus-building can reinforce equality, communication and mutual respect."},
      {"time": "8:00 PM", "title": "Nature Walk or Relaxation", "emoji": "\ud83c\udf19", "instruction": "Take a walk in nature or relax at home with a book, music or craft. Unwind fully.", "meaning": "Evening relaxation can reflect the value of balance, restoration and personal time."},
      {"time": "9:30 PM", "title": "Reflect on Balance", "emoji": "\ud83d\udcad", "instruction": "Think about how you balanced work, rest, social time and nature today. What felt good?", "meaning": "Reflection on balance can encourage healthier habits, self-awareness and sustainable living."},
    ]
  },
  /* ===== UNITED KINGDOM ===== */
  {
    id: "uk",
    name: "United Kingdom",
    flag: "\ud83c\uddec\ud83c\udde7",
    background: "British culture across its regions often values politeness, queuing, humour, and a cup of tea as a social ritual. In many contexts, understatement, fair play, and maintaining a 'stiff upper lip' are part of daily social behaviour.",
    focus: "Politeness, queuing, humour, tea rituals and fair play.",
    identity: "British daily habits can shape identity by encouraging courtesy, resilience, social fairness and appreciation of tradition.",
    tasks: [
      {"time": "6:00 AM", "title": "Quiet Morning Start", "emoji": "\ud83c\udf05", "instruction": "Wake up quietly, make a cup of tea and look out the window as the day begins.", "meaning": "A quiet tea-filled morning can reflect the cultural value of calm starts and personal reflection."},
      {"time": "6:30 AM", "title": "Morning Walk with a Dog or Friend", "emoji": "\ud83d\udc15", "instruction": "Take a walk around your neighbourhood or local park. Greet people politely as you pass.", "meaning": "Morning walks can reflect appreciation for community, routine and the outdoors."},
      {"time": "7:00 AM", "title": "Wash and Dress Appropriately", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress for the weather. Always carry an umbrella or layer just in case.", "meaning": "Dressing for weather can reflect practicality, preparedness and understated good sense."},
      {"time": "7:30 AM", "title": "Full English or Light Breakfast", "emoji": "\ud83c\udf73", "instruction": "Eat a hearty breakfast or something light with tea. Sit at the table if possible.", "meaning": "Breakfast can reflect the value of starting the day with sustenance and a moment of calm."},
      {"time": "8:00 AM", "title": "Polite Greetings and Small Talk", "emoji": "\ud83d\udc4b", "instruction": "Greet people with 'Good morning' and engage in brief small talk about the weather.", "meaning": "Polite small talk can reflect social courtesy and the cultural art of maintaining pleasant relations."},
      {"time": "8:30 AM", "title": "Queue Patiently", "emoji": "\ud83d\udeb6", "instruction": "Wait your turn in line without complaining. Respect the order and fairness of queuing.", "meaning": "Patient queuing can reflect respect for social order, fairness and collective civility."},
      {"time": "9:00 AM", "title": "Focused Morning Work", "emoji": "\ud83d\udcda", "instruction": "Begin work or study with concentration. Meet deadlines and honour your commitments.", "meaning": "Reliable work can reflect the cultural value of keeping one's word and doing a job properly."},
      {"time": "9:30 AM", "title": "Tea Break with Biscuits", "emoji": "\ud83c\udf6a", "instruction": "Brew a cup of tea and enjoy it with a biscuit. Offer to make tea for others too.", "meaning": "The tea ritual can reflect hospitality, social bonding and the importance of small daily comforts."},
      {"time": "10:00 AM", "title": "Help Someone Without Fuss", "emoji": "\ud83e\udd1d", "instruction": "Quietly help a colleague, classmate or neighbour with a small task. Do not make a big deal of it.", "meaning": "Understated helpfulness can reflect modesty, community spirit and genuine kindness."},
      {"time": "10:30 AM", "title": "Read a Newspaper or Article", "emoji": "\ud83d\udcf0", "instruction": "Read news, a book or an article for 15 minutes. Stay informed about the world.", "meaning": "Reading can reflect intellectual curiosity and the value of being an informed citizen."},
      {"time": "11:00 AM", "title": "Prepare for Lunch", "emoji": "\ud83e\udd6a", "instruction": "Make or buy lunch. Choose something simple, hearty and satisfying.", "meaning": "Practical meal choices can reflect the cultural preference for simplicity and substance."},
      {"time": "12:00 PM", "title": "Lunch with Colleagues or Friends", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat lunch with others. Talk about hobbies, sports, or weekend plans \u2014 avoid controversial topics.", "meaning": "Lunch conversation can build social bonds through shared, safe topics and mutual courtesy."},
      {"time": "1:00 PM", "title": "Short Walk After Lunch", "emoji": "\ud83c\udf33", "instruction": "Take a walk outside after eating. Enjoy the fresh air and stretch your legs.", "meaning": "Post-lunch walks can aid digestion and provide mental refreshment during the workday."},
      {"time": "2:00 PM", "title": "Afternoon Work with Humour", "emoji": "\ud83d\ude04", "instruction": "Return to work. If stress arises, use dry humour to lighten the mood without offending.", "meaning": "Humour can reflect resilience, social skill and the cultural art of not taking things too seriously."},
      {"time": "3:00 PM", "title": "Afternoon Tea", "emoji": "\ud83e\uded6", "instruction": "Have another cup of tea with a small snack. Take a genuine break from work.", "meaning": "Afternoon tea can restore energy and reflect the cultural belief in pacing oneself."},
      {"time": "4:00 PM", "title": "Tidy Your Space", "emoji": "\ud83e\uddf9", "instruction": "Organise your desk, room or workspace. Keep things neat and functional.", "meaning": "Tidiness can reflect orderliness, efficiency and respect for shared environments."},
      {"time": "5:30 PM", "title": "Cook a Simple Dinner", "emoji": "\ud83c\udf72", "instruction": "Prepare a simple, warming dinner: stew, roast, or fish and vegetables. Nothing fancy.", "meaning": "Simple home cooking can reflect self-reliance, comfort and the value of wholesome food."},
      {"time": "7:00 PM", "title": "Family Dinner and News", "emoji": "\ud83d\udcfa", "instruction": "Eat dinner with family. Discuss the day's news or watch a programme together.", "meaning": "Shared meals with current affairs discussion can reinforce family bonds and civic awareness."},
      {"time": "8:00 PM", "title": "Evening Walk or Pub Visit", "emoji": "\ud83c\udf7a", "instruction": "Take an evening walk or visit a local pub for a soft drink. Chat with neighbours or friends.", "meaning": "Evening socialising can strengthen community ties and create a sense of local belonging."},
      {"time": "9:30 PM", "title": "Quiet Reflection with Tea", "emoji": "\ud83e\uded6", "instruction": "Make a final cup of tea, sit quietly and think about one thing that went well today.", "meaning": "Evening reflection with tea can encourage gratitude, calm and appreciation for small daily wins."},
    ]
  },
  /* ===== GREECE ===== */
  {
    id: "greece",
    name: "Greece",
    flag: "\ud83c\uddec\ud83c\uddf7",
    background: "Greek culture often values philoxenia (love of strangers), family bonds, lively debate, and the enjoyment of food and wine. In many contexts, Orthodox traditions, maritime heritage, and Mediterranean rhythms shape daily life.",
    focus: "Philoxenia, family bonds, lively debate, food culture and Mediterranean rhythm.",
    identity: "Greek daily habits can shape identity through hospitality, passionate expression, family devotion and appreciation of life's pleasures.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Coffee and Quiet", "emoji": "\u2615", "instruction": "Wake up slowly and make a strong Greek coffee. Sip it quietly while planning the day.", "meaning": "Morning coffee can reflect the Mediterranean value of easing into the day with intention."},
      {"time": "6:30 AM", "title": "Stretch or Walk by the Sea", "emoji": "\ud83c\udf0a", "instruction": "If near water, walk by the sea. Otherwise, stretch or walk around your neighbourhood.", "meaning": "Morning walks by water can reflect the maritime heritage and love of natural beauty."},
      {"time": "7:00 AM", "title": "Wash and Dress Brightly", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress in bright, comfortable clothes. Greeks often value colour and expression.", "meaning": "Vibrant dressing can reflect joy, self-expression and the Mediterranean love of life."},
      {"time": "7:30 AM", "title": "Yogurt, Honey and Fruit Breakfast", "emoji": "\ud83c\udf6f", "instruction": "Eat Greek yoghurt with honey and walnuts, or fresh fruit with bread and olive oil.", "meaning": "Traditional breakfast can connect people to Mediterranean heritage and simple, natural food."},
      {"time": "8:00 AM", "title": "Warm Family Greeting", "emoji": "\ud83e\udd17", "instruction": "Greet family with warmth, kisses on both cheeks and enthusiastic good mornings.", "meaning": "Warm physical greetings may reinforce affection, closeness and expressive family bonds."},
      {"time": "8:30 AM", "title": "Plan Social Visits", "emoji": "\ud83d\udcc5", "instruction": "Think about who you will see today. Greeks value spontaneous visits and social connection.", "meaning": "Social planning can reflect the cultural importance of relationships and community presence."},
      {"time": "9:00 AM", "title": "Focused Work with Passion", "emoji": "\u270f\ufe0f", "instruction": "Work or study with dedication and passion. Give your full effort to whatever you do.", "meaning": "Passionate effort can reflect the cultural value of putting your heart into your work."},
      {"time": "9:30 AM", "title": "Coffee with a Friend", "emoji": "\u2615", "instruction": "Meet a friend for elliniko coffee. Talk loudly, gesture and debate about life.", "meaning": "Coffee with friends can reflect the cultural love of conversation, debate and social connection."},
      {"time": "10:00 AM", "title": "Visit a Local Shop or Market", "emoji": "\ud83e\uded2", "instruction": "Visit a local shop, bakery or market. Buy fresh bread, olives or cheese. Chat with the owner.", "meaning": "Local shopping can reflect appreciation for fresh Mediterranean food and personal relationships."},
      {"time": "10:30 AM", "title": "Learn a Greek Word or Phrase", "emoji": "\ud83d\udde3\ufe0f", "instruction": "Learn one Greek word or phrase and use it in conversation today.", "meaning": "Language curiosity can deepen cultural connection and communication."},
      {"time": "11:00 AM", "title": "Prepare for Big Lunch", "emoji": "\ud83c\udf45", "instruction": "Help prepare fresh ingredients for lunch: chop tomatoes, cucumbers, or make tzatziki.", "meaning": "Food preparation can reflect care for family and appreciation of fresh, simple ingredients."},
      {"time": "12:00 PM", "title": "Long Mediterranean Lunch", "emoji": "\ud83e\udd57", "instruction": "Eat a long lunch with salad, bread, olive oil and protein. Talk and laugh without rushing.", "meaning": "A leisurely lunch can reflect the Mediterranean value of presence, enjoyment and social connection."},
      {"time": "1:00 PM", "title": "Siesta or Quiet Rest", "emoji": "\ud83d\ude0c", "instruction": "Rest for 30-60 minutes after lunch. Read, nap or sit quietly in the shade.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and adapting to the Mediterranean climate."},
      {"time": "2:00 PM", "title": "Visit Friends or Neighbours", "emoji": "\ud83c\udfe0", "instruction": "Visit a friend or neighbour unexpectedly. Bring a small sweet or fruit as a gift.", "meaning": "Spontaneous visits can reflect philoxenia, warmth and the value of personal presence."},
      {"time": "3:00 PM", "title": "Walk in the Village or City", "emoji": "\ud83c\udfdb\ufe0f", "instruction": "Walk through your neighbourhood, admire architecture, or visit a church or historical site.", "meaning": "Walking and observing can foster connection to place, history and community."},
      {"time": "4:00 PM", "title": "Share a Sweet and Coffee", "emoji": "\ud83c\udf70", "instruction": "Share baklava, loukoumades or fruit with family over another coffee.", "meaning": "Afternoon sweets can create rituals of togetherness and cultural food appreciation."},
      {"time": "5:30 PM", "title": "Help Prepare Dinner", "emoji": "\ud83c\udf73", "instruction": "Cook dinner with family: grill fish, make moussaka, or prepare a big Greek salad together.", "meaning": "Cooking together can reinforce family bonds, shared heritage and the joy of creating together."},
      {"time": "7:00 PM", "title": "Loud Family Dinner", "emoji": "\ud83c\udf77", "instruction": "Eat dinner with family. Talk loudly, debate, laugh and share stories around the table.", "meaning": "Expressive family meals can reinforce closeness, passionate communication and cultural identity."},
      {"time": "8:00 PM", "title": "Evening Walk or Socialising", "emoji": "\ud83c\udf19", "instruction": "Take an evening volta (walk) or sit at a cafe with friends. Watch the world go by.", "meaning": "Evening social walks can strengthen community bonds and create space for relaxed conversation."},
      {"time": "9:30 PM", "title": "Reflect on Joy and Connection", "emoji": "\ud83d\udcad", "instruction": "Think about one moment of laughter, one delicious thing you ate, and one person you hugged today.", "meaning": "Reflection can strengthen gratitude, social warmth and appreciation for life's simple pleasures."},
    ]
  },
  /* ===== RUSSIA ===== */
  {
    id: "russia",
    name: "Russia",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    background: "Russian culture often values deep friendship, literature, resilience in hardship, and the warmth of home. In many contexts, tea drinking, heartfelt conversation, and appreciation for arts and nature shape daily life.",
    focus: "Deep friendship, literature, resilience, tea rituals and home warmth.",
    identity: "Russian daily habits can shape identity through loyalty, intellectual depth, emotional honesty and appreciation of culture.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Tea and Silence", "emoji": "\u2615", "instruction": "Wake up and drink hot tea slowly. Look out at the weather and prepare mentally for the day.", "meaning": "Morning tea can reflect the cultural value of contemplation, warmth and preparing for challenges."},
      {"time": "6:30 AM", "title": "Morning Exercise or Walk", "emoji": "\ud83c\udfc3", "instruction": "Do light exercise or take a brisk walk, even in cold weather. Dress warmly and breathe deeply.", "meaning": "Exercise in any weather can reflect resilience, discipline and appreciation for the seasons."},
      {"time": "7:00 AM", "title": "Wash and Dress Warmly", "emoji": "\ud83e\udde3", "instruction": "Shower and dress in warm layers. Russians know that being prepared for weather is essential.", "meaning": "Dressing for weather can reflect practicality, resilience and self-care in a challenging climate."},
      {"time": "7:30 AM", "title": "Hearty Breakfast", "emoji": "\ud83e\udd63", "instruction": "Eat a filling breakfast: porridge, eggs, bread with butter, or blini. Start the day with strength.", "meaning": "A hearty breakfast can reflect the cultural value of strength, nourishment and facing the day with energy."},
      {"time": "8:00 AM", "title": "Warm Family Greeting", "emoji": "\ud83e\udd17", "instruction": "Greet family members warmly, perhaps with a hug. Ask about their dreams or plans.", "meaning": "Warm family greetings can reinforce emotional closeness and the importance of home as a refuge."},
      {"time": "8:30 AM", "title": "Read a Poem or Quote", "emoji": "\ud83d\udcd6", "instruction": "Read one poem, literary quote or passage before leaving. Carry its wisdom with you.", "meaning": "Literary engagement can reflect the deep cultural value placed on poetry, philosophy and ideas."},
      {"time": "9:00 AM", "title": "Focused Work with Depth", "emoji": "\u270f\ufe0f", "instruction": "Work or study with serious focus. Russians value thoroughness and intellectual rigour.", "meaning": "Deep focus can reflect the cultural appreciation for mastery, knowledge and meaningful work."},
      {"time": "9:30 AM", "title": "Tea Break with Colleagues", "emoji": "\ud83e\uded6", "instruction": "Brew strong tea and share it with colleagues. Talk about life, literature or weekend plans.", "meaning": "Tea sharing can build social bonds and reflect the cultural importance of hospitality and conversation."},
      {"time": "10:00 AM", "title": "Help Someone Sincerely", "emoji": "\ud83e\udd1d", "instruction": "Offer genuine help to someone who needs it. Do not expect anything in return.", "meaning": "Sincere helpfulness can reflect the cultural value of solidarity, especially in difficult times."},
      {"time": "10:30 AM", "title": "Visit a Museum or Library", "emoji": "\ud83c\udfdb\ufe0f", "instruction": "If possible, visit a museum, gallery or library. Engage with art, history or literature.", "meaning": "Cultural engagement can reflect intellectual curiosity and appreciation for Russia's rich heritage."},
      {"time": "11:00 AM", "title": "Prepare a Hearty Lunch", "emoji": "\ud83c\udf72", "instruction": "Help prepare a warm, hearty lunch: soup, stew, or potatoes with meat and vegetables.", "meaning": "Hearty food preparation can reflect care for nourishment and the value of warming, comforting meals."},
      {"time": "12:00 PM", "title": "Shared Soup and Bread Lunch", "emoji": "\ud83c\udf5e", "instruction": "Eat lunch with family or friends. Share soup, bread and conversation equally.", "meaning": "Shared meals can reinforce social bonds and reflect the cultural importance of communal sustenance."},
      {"time": "1:00 PM", "title": "Rest or Read Literature", "emoji": "\ud83d\udcda", "instruction": "Rest quietly or read Russian or world literature for 30 minutes. Let your mind wander.", "meaning": "Literary reading can provide emotional depth, intellectual growth and cultural connection."},
      {"time": "2:00 PM", "title": "Walk in Nature or Snow", "emoji": "\u2744\ufe0f", "instruction": "Go outside for a walk, regardless of weather. Observe the landscape, trees or snow.", "meaning": "Nature walks in all weather can reflect resilience and deep appreciation for the natural world."},
      {"time": "3:00 PM", "title": "Deep Conversation with a Friend", "emoji": "\ud83d\udcac", "instruction": "Have a heartfelt conversation with a close friend. Discuss dreams, fears or philosophy.", "meaning": "Deep conversation can reflect the cultural value of soulful friendship and emotional honesty."},
      {"time": "4:00 PM", "title": "Prepare Tea and Snacks", "emoji": "\ud83c\udf6a", "instruction": "Prepare strong tea with jam, honey, biscuits or cake. Invite someone to join you.", "meaning": "Afternoon tea can create warmth, hospitality and space for meaningful social connection."},
      {"time": "5:30 PM", "title": "Cook a Warm Dinner", "emoji": "\ud83c\udf73", "instruction": "Cook a warm, nourishing dinner: borscht, pelmeni, or roasted vegetables with meat.", "meaning": "Cooking hearty food can reflect care for family, tradition and the need for warmth and comfort."},
      {"time": "7:00 PM", "title": "Family Dinner and Discussion", "emoji": "\ud83e\udd58", "instruction": "Eat dinner with family. Discuss news, books, or family history with passion and honesty.", "meaning": "Family meals with deep discussion can reinforce bonds, intellectual engagement and shared values."},
      {"time": "8:00 PM", "title": "Evening Cultural Activity", "emoji": "\ud83c\udfad", "instruction": "Watch a film, listen to classical music, or discuss a book with family or friends.", "meaning": "Evening culture can strengthen intellectual identity and appreciation for artistic expression."},
      {"time": "9:30 PM", "title": "Reflect on Resilience", "emoji": "\ud83d\udcad", "instruction": "Think about one challenge you faced today and how you overcame it. Be proud of your strength.", "meaning": "Reflection on resilience can build self-respect, gratitude and awareness of inner strength."},
    ]
  },
  /* ===== MOROCCO ===== */
  {
    id: "morocco",
    name: "Morocco",
    flag: "\ud83c\uddf2\ud83c\udde6",
    background: "Moroccan culture often blends hospitality, community tradition, and spiritual reflection. In many contexts, sharing tea and meals with guests is a sign of respect, and family bonds are deeply cherished.",
    focus: "Hospitality, family, spiritual reflection, community tradition and shared meals.",
    identity: "Moroccan daily habits can shape identity through hospitality, family connection, spiritual awareness and community belonging.",
    tasks: [
      {"time": "6:00 AM", "title": "Dawn Prayer or Quiet Reflection", "emoji": "\ud83c\udf05", "instruction": "Begin the day with prayer, gratitude or quiet reflection before the household wakes fully.", "meaning": "Morning spiritual practice can centre the soul and connect daily life to deeper values and purpose."},
      {"time": "6:30 AM", "title": "Morning Walk in the Medina", "emoji": "\ud83c\udfee", "instruction": "Walk through your neighbourhood or a local market. Observe the early morning activity.", "meaning": "Morning walks can reflect appreciation for community life, architecture and daily rhythm."},
      {"time": "7:00 AM", "title": "Wash and Dress with Care", "emoji": "\ud83e\uddfc", "instruction": "Wash thoroughly, apply argan oil if available, and dress in clean, modest clothing.", "meaning": "Personal care can reflect self-respect and the cultural value of cleanliness and presentation."},
      {"time": "7:30 AM", "title": "Warm Family Breakfast", "emoji": "\ud83c\udf5e", "instruction": "Eat breakfast with family \u2014 bread, cheese, olives, honey or pastries. Ask how everyone slept.", "meaning": "A shared breakfast can reinforce family connection, emotional warmth and daily mutual care."},
      {"time": "8:00 AM", "title": "Greet Everyone with Warmth", "emoji": "\u2600\ufe0f", "instruction": "Greet every family member, neighbour or shopkeeper with warmth, eye contact and genuine interest.", "meaning": "Warm daily greetings may reflect the cultural importance of personal connection and community goodwill."},
      {"time": "8:30 AM", "title": "Tidy Home and Shared Spaces", "emoji": "\ud83e\uddf9", "instruction": "Sweep the entrance, tidy common areas, or help with morning chores before leaving.", "meaning": "Home tidiness can reflect pride in one's space and hospitality for potential guests."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with dedication for an hour. Approach tasks with patience and thoroughness.", "meaning": "Dedicated effort can reflect discipline and the value of doing things well with care."},
      {"time": "9:30 AM", "title": "Mint Tea Ritual", "emoji": "\ud83c\udf75", "instruction": "Prepare and share mint tea with a family member or guest. Pour from high and serve with care.", "meaning": "The tea ritual can reflect hospitality, patience, artistry and respect for those you share it with."},
      {"time": "10:00 AM", "title": "Visit a Neighbour or Elder", "emoji": "\ud83d\udc74", "instruction": "Visit, call or check in on a neighbour, relative or elderly person. Ask if they need anything.", "meaning": "Checking in with others may reinforce community support, empathy and the extended family spirit."},
      {"time": "10:30 AM", "title": "Learn a Craft or Recipe", "emoji": "\ud83e\uddf6", "instruction": "Ask someone to teach you a traditional craft, recipe or skill from Moroccan culture.", "meaning": "Learning traditions can preserve cultural memory and strengthen intergenerational bonds."},
      {"time": "11:00 AM", "title": "Shop for Fresh Ingredients", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Visit a souk or market. Buy fresh vegetables, spices, bread and meat for the day's meals.", "meaning": "Market shopping can reflect appreciation for fresh food, bargaining artistry and community."},
      {"time": "12:00 PM", "title": "Shared Communal Meal", "emoji": "\ud83c\udf72", "instruction": "Eat a shared meal from a communal dish with family or friends. Use bread to scoop and share generously.", "meaning": "Communal eating can strengthen bonds, reflect generosity and embody shared cultural identity."},
      {"time": "1:00 PM", "title": "Rest or Quiet Time", "emoji": "\ud83d\ude0c", "instruction": "Take a mid-afternoon rest. Read, nap, or sit quietly to escape the heat and recharge.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and adapting to natural conditions."},
      {"time": "2:00 PM", "title": "Read Quranic Verses or Poetry", "emoji": "\ud83d\udcd6", "instruction": "Read spiritual texts, poetry or stories. Reflect on their meaning in your life.", "meaning": "Spiritual reading can provide inner peace and connect personal values to tradition."},
      {"time": "3:00 PM", "title": "Walk Through the Neighbourhood", "emoji": "\ud83c\udf34", "instruction": "Walk through your area, greet shopkeepers, and observe the afternoon rhythms of daily life.", "meaning": "Neighbourhood walks can foster belonging, social connection and appreciation for local culture."},
      {"time": "4:00 PM", "title": "Prepare Afternoon Tea", "emoji": "\ud83e\uded6", "instruction": "Prepare mint tea and snacks for family or guests who may visit unexpectedly.", "meaning": "Afternoon tea preparation can reflect hospitality and the cultural value of welcoming guests."},
      {"time": "5:30 PM", "title": "Help Cook the Evening Meal", "emoji": "\ud83c\udf73", "instruction": "Assist with tagine, couscous or another traditional dish. Chop, stir and taste together.", "meaning": "Cooking together can reinforce family bonds, shared knowledge and the joy of creating together."},
      {"time": "7:00 PM", "title": "Evening Prayer and Family Time", "emoji": "\ud83d\ude4f", "instruction": "Participate in evening prayer, then gather with family for dinner and conversation.", "meaning": "Evening spiritual practice can provide peace and strengthen family unity through shared faith."},
      {"time": "8:00 PM", "title": "Storytelling and Conversation", "emoji": "\ud83d\udcd6", "instruction": "Share a story, memory, proverb or lesson with family. Listen to their stories too.", "meaning": "Oral storytelling may preserve cultural memory, pass down wisdom and strengthen family bonds."},
      {"time": "9:30 PM", "title": "Evening Gratitude", "emoji": "\ud83d\udcad", "instruction": "Reflect on one blessing, one act of kindness, and one person you connected with today.", "meaning": "Reflection can build gratitude, spiritual awareness and appreciation for community."},
    ]
  },
  /* ===== NIGERIA ===== */
  {
    id: "nigeria",
    name: "Nigeria",
    flag: "\ud83c\uddf3\ud83c\uddec",
    background: "Nigerian culture across its many ethnic groups often values respect for elders, vibrant social expression, communal eating, and strong family networks. Hospitality and colourful traditions are central to many daily experiences.",
    focus: "Respect for elders, family, communal eating, hospitality and social expression.",
    identity: "Nigerian daily habits can shape identity through respect, family loyalty, hospitality and vibrant social connection.",
    tasks: [
      {"time": "6:00 AM", "title": "Energetic Morning Prayer", "emoji": "\ud83d\ude4f", "instruction": "Begin the day with prayer, singing or gratitude. Start with energy and positive spirit.", "meaning": "Morning spiritual practice can set a positive, hopeful tone and connect faith to daily action."},
      {"time": "6:30 AM", "title": "Morning Exercise or Dance", "emoji": "\ud83d\udc83", "instruction": "Do light exercise, dance to music, or move your body with joy for 20 minutes.", "meaning": "Morning movement can reflect the cultural value of energy, rhythm and physical vitality."},
      {"time": "7:00 AM", "title": "Wash and Dress Brightly", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress in bright, colourful clothes. Nigerians often value vibrant self-expression.", "meaning": "Bright dressing can reflect joy, confidence and the cultural celebration of colour and life."},
      {"time": "7:30 AM", "title": "Hearty Family Breakfast", "emoji": "\ud83c\udf4c", "instruction": "Eat a filling breakfast such as plantain, eggs, bread, pap or fruit. Share with family.", "meaning": "A hearty breakfast can reflect the cultural value of strength, nourishment and starting with abundance."},
      {"time": "8:00 AM", "title": "Greet Elders Respectfully", "emoji": "\ud83d\ude4f", "instruction": "Greet parents, teachers or elders with respectful words, humble posture and attentive listening.", "meaning": "Respectful greetings may reinforce intergenerational care, social values and the wisdom of elders."},
      {"time": "8:30 AM", "title": "Share Something with Others", "emoji": "\ud83c\udf81", "instruction": "Share food, a story, a compliment or help with someone today. Give without expecting return.", "meaning": "Generous sharing can reflect hospitality, community spirit and the belief that giving enriches everyone."},
      {"time": "9:00 AM", "title": "Focused Morning Work", "emoji": "\u270f\ufe0f", "instruction": "Work or study with determination for an hour. Approach challenges with confidence and effort.", "meaning": "Dedicated effort can reflect the cultural value of hard work, ambition and self-improvement."},
      {"time": "9:30 AM", "title": "Snack and Social Break", "emoji": "\ud83c\udf6a", "instruction": "Eat a snack and chat with friends or colleagues. Laugh loudly and enjoy the moment.", "meaning": "Social breaks can reinforce joy, community connection and the cultural love of lively interaction."},
      {"time": "10:00 AM", "title": "Visit or Call Family", "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", "instruction": "Call a relative you have not spoken to recently. Ask about their wellbeing and share news.", "meaning": "Maintaining family connections can reinforce loyalty, care and the wide circle of extended family."},
      {"time": "10:30 AM", "title": "Learn a Proverb or Story", "emoji": "\ud83d\udcdc", "instruction": "Ask an elder to teach you a proverb, folk story or piece of wisdom about life or community.", "meaning": "Learning wisdom can preserve cultural identity, guide moral development and connect generations."},
      {"time": "11:00 AM", "title": "Help Prepare Lunch", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Help chop vegetables, pound yam, or prepare stew alongside family members.", "meaning": "Cooking together can reinforce cooperation, shared cultural knowledge and family joy."},
      {"time": "12:00 PM", "title": "Shared Meal from One Pot", "emoji": "\ud83c\udf5b", "instruction": "Eat lunch with others from a shared pot or plate. Encourage others to eat first.", "meaning": "Shared eating can reflect hospitality, generosity and the cultural importance of communal abundance."},
      {"time": "1:00 PM", "title": "Rest or Listen to Music", "emoji": "\ud83c\udfb5", "instruction": "Rest for 20-30 minutes or listen to Afrobeat, highlife or gospel music to recharge.", "meaning": "Music can foster joy, emotional release and cultural connection during the afternoon."},
      {"time": "2:00 PM", "title": "Express Yourself Creatively", "emoji": "\ud83c\udfa8", "instruction": "Dance, sing, draw, or write. Express your emotions freely and joyfully.", "meaning": "Creative expression can reflect the cultural value of vibrant self-expression and emotional honesty."},
      {"time": "3:00 PM", "title": "Walk or Visit Neighbours", "emoji": "\ud83d\udeb6", "instruction": "Walk through your neighbourhood and greet people warmly. Visit a friend if you can.", "meaning": "Neighbourhood socialising can reinforce community bonds and the value of personal presence."},
      {"time": "4:00 PM", "title": "Help a Family Member", "emoji": "\ud83c\udfe0", "instruction": "Assist with a household task such as cleaning, fetching water, or running an errand.", "meaning": "Helping family may reinforce responsibility, care and the collective identity of the home."},
      {"time": "5:30 PM", "title": "Prepare Evening Meal", "emoji": "\ud83c\udf73", "instruction": "Help cook jollof rice, egusi soup, or another Nigerian dish with family.", "meaning": "Cooking traditional food can preserve cultural heritage and strengthen family bonds."},
      {"time": "7:00 PM", "title": "Loud Family Dinner", "emoji": "\ud83e\udd58", "instruction": "Eat dinner with family. Talk loudly, laugh, share stories and debate about daily life.", "meaning": "Expressive family meals can reinforce closeness, joy and the cultural love of communal dining."},
      {"time": "8:00 PM", "title": "Music and Social Time", "emoji": "\ud83c\udfb6", "instruction": "Listen to music, dance, or chat with family and friends. Enjoy the evening together.", "meaning": "Evening music and social time can foster joy, cultural expression and emotional connection."},
      {"time": "9:30 PM", "title": "Share a Proverb or Lesson", "emoji": "\ud83d\udcd6", "instruction": "Share a proverb, lesson or story with someone about wisdom, community or values.", "meaning": "Sharing wisdom can preserve cultural identity and guide moral development across generations."},
    ]
  },
  /* ===== KENYA ===== */
  {
    id: "kenya",
    name: "Kenya",
    flag: "\ud83c\uddf0\ud83c\uddea",
    background: "Kenyan culture across its diverse communities often values hospitality, communal work, respect for elders, and connection to nature. In many contexts, sharing and working together are seen as essential parts of social life.",
    focus: "Hospitality, communal work, respect for elders, nature connection and sharing.",
    identity: "Kenyan daily habits can shape identity through hospitality, community cooperation, respect and environmental awareness.",
    tasks: [
      {"time": "6:00 AM", "title": "Greet the New Day", "emoji": "\ud83c\udf05", "instruction": "Step outside or open your window. Greet the morning with a smile and gratitude for a new day.", "meaning": "Morning gratitude can cultivate optimism, connection to nature and appreciation for life's daily renewal."},
      {"time": "6:30 AM", "title": "Morning Chores or Exercise", "emoji": "\ud83c\udfc3", "instruction": "Help with morning chores, milk animals, or do light exercise such as jogging or stretching.", "meaning": "Morning activity can reflect discipline, responsibility and connection to rural or community life."},
      {"time": "7:00 AM", "title": "Wash and Dress", "emoji": "\ud83e\uddfc", "instruction": "Wash your face and body, brush your teeth and dress in clean clothes. Present yourself well.", "meaning": "Personal cleanliness can reflect self-respect and the value of dignity in daily life."},
      {"time": "7:30 AM", "title": "Simple Shared Breakfast", "emoji": "\ud83e\uded3", "instruction": "Eat porridge, bread, fruit or tea with milk. Share what you have with someone who may not have eaten.", "meaning": "A simple, shared breakfast can reflect humility, generosity and the value of nourishment for all."},
      {"time": "8:00 AM", "title": "Greet Family and Elders", "emoji": "\ud83d\udc4b", "instruction": "Greet your family warmly. Ask each person about their plans and offer encouragement.", "meaning": "Morning greetings may set a respectful, caring tone and reinforce family bonds."},
      {"time": "8:30 AM", "title": "Plan Community Tasks", "emoji": "\ud83d\udccb", "instruction": "Think about one way you can help your community, school or family today.", "meaning": "Community planning can reflect the cultural value of collective responsibility and mutual support."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with concentration for an hour. Help a peer who is struggling if you can.", "meaning": "Dedicated learning can reflect the value of education, cooperation and lifting others up."},
      {"time": "9:30 AM", "title": "Tea Break with Friends", "emoji": "\ud83c\udf75", "instruction": "Share tea and a snack with friends or classmates. Talk about community news and events.", "meaning": "Tea breaks can reinforce social bonds and reflect the importance of community dialogue."},
      {"time": "10:00 AM", "title": "Help Someone with a Task", "emoji": "\ud83e\udd1d", "instruction": "Help a classmate, neighbour or family member carry something, explain homework, or fix an item.", "meaning": "Helping others may reinforce community spirit and the belief that together we are stronger."},
      {"time": "10:30 AM", "title": "Learn About Nature", "emoji": "\ud83c\udf33", "instruction": "Observe local plants, birds, insects or animals. Learn one new fact about your natural environment.", "meaning": "Nature observation can strengthen environmental connection and appreciation for the land."},
      {"time": "11:00 AM", "title": "Prepare for Lunch", "emoji": "\ud83e\udd6c", "instruction": "Help gather, wash or prepare vegetables and ingredients for the upcoming meal.", "meaning": "Food preparation can reflect cooperation, gratitude for nourishment and shared effort."},
      {"time": "12:00 PM", "title": "Eat Lunch with Others", "emoji": "\ud83c\udf72", "instruction": "Eat lunch with family, friends or classmates. Share food and conversation equally.", "meaning": "Shared meals can reinforce social bonds and reflect the value of togetherness."},
      {"time": "1:00 PM", "title": "Rest or Read Under a Tree", "emoji": "\ud83c\udf34", "instruction": "Rest in the shade, read a book, or simply watch the clouds. Recharge your energy.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and connection to the natural world."},
      {"time": "2:00 PM", "title": "Join a Communal Task", "emoji": "\ud83e\uddf9", "instruction": "Join a group task \u2014 cleaning, gardening, farming or building. Work alongside others.", "meaning": "Communal work can reinforce cooperation, shared responsibility and collective achievement."},
      {"time": "3:00 PM", "title": "Play Football or Games", "emoji": "\u26bd", "instruction": "Play football, netball, or traditional games with friends. Laugh and compete joyfully.", "meaning": "Play can foster teamwork, physical health and community bonds through shared activity."},
      {"time": "4:00 PM", "title": "Visit a Neighbour", "emoji": "\ud83c\udfe0", "instruction": "Visit a neighbour or relative. Ask about their health and offer help if they need it.", "meaning": "Neighbourly visits can reinforce community support, empathy and social cohesion."},
      {"time": "5:30 PM", "title": "Help Cook Dinner", "emoji": "\ud83c\udf73", "instruction": "Assist with cooking the evening meal: wash vegetables, stir ugali, or set the table.", "meaning": "Contributing to meals can reinforce family cooperation and gratitude for shared nourishment."},
      {"time": "7:00 PM", "title": "Shared Evening Meal", "emoji": "\ud83c\udf5b", "instruction": "Eat dinner with family or friends. Discuss the day's events, challenges and celebrations.", "meaning": "Shared evening meals can reinforce family bonds and mutual emotional support."},
      {"time": "8:00 PM", "title": "Storytelling or Singing", "emoji": "\ud83c\udfb5", "instruction": "Gather with family or friends to share stories, sing songs, or discuss community matters.", "meaning": "Oral tradition can preserve cultural memory and strengthen community identity."},
      {"time": "9:30 PM", "title": "Reflect on Community", "emoji": "\ud83c\udf0d", "instruction": "Think about one way your community supports you and one way you can support them tomorrow.", "meaning": "Reflection on community can build gratitude, reciprocity and awareness of interdependence."},
    ]
  },
  /* ===== EGYPT ===== */
  {
    id: "egypt",
    name: "Egypt",
    flag: "\ud83c\uddea\ud83c\uddec",
    background: "Egyptian culture often values family respect, hospitality, education, and historical awareness. In many contexts, strong family ties and warm social interactions shape daily routines, while ancient traditions continue to influence modern life.",
    focus: "Family respect, hospitality, education, historical awareness and social warmth.",
    identity: "Egyptian daily habits can shape identity through family loyalty, hospitality, respect for knowledge and appreciation of heritage.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Gratitude", "emoji": "\ud83c\udf05", "instruction": "Upon waking, say a quiet prayer or expression of thanks for your family, health and the new day.", "meaning": "Morning gratitude can centre the heart and connect daily life to spiritual values."},
      {"time": "6:30 AM", "title": "Walk by the Nile or Street", "emoji": "\ud83c\udf0a", "instruction": "If possible, walk near water or through your neighbourhood. Observe the morning life around you.", "meaning": "Morning walks can reflect connection to place, history and the rhythms of daily life."},
      {"time": "7:00 AM", "title": "Wash and Dress Neatly", "emoji": "\ud83e\uddfc", "instruction": "Shower, groom yourself and dress neatly. Egyptians often value presenting oneself with dignity.", "meaning": "Personal grooming can reflect self-respect and the cultural value of dignity and appearance."},
      {"time": "7:30 AM", "title": "Warm Family Breakfast", "emoji": "\ud83e\udd59", "instruction": "Eat breakfast with family \u2014 bread, cheese, beans, falafel or fruit. Ask about their hopes for the day.", "meaning": "A shared breakfast can reinforce family connection, emotional support and daily mutual care."},
      {"time": "8:00 AM", "title": "Greet Teachers and Elders", "emoji": "\ud83d\ude4f", "instruction": "Greet teachers, parents or elders with respectful words, attentive posture and sincere eye contact.", "meaning": "Respectful greetings may reflect the cultural value placed on hierarchy, care and social order."},
      {"time": "8:30 AM", "title": "Review Lessons or Plan Work", "emoji": "\ud83d\udcd6", "instruction": "Review what you learned yesterday or plan today's tasks. Approach work with curiosity.", "meaning": "Preparation can reflect the deep cultural value placed on education, knowledge and wisdom."},
      {"time": "9:00 AM", "title": "Focused Study or Work", "emoji": "\ud83d\udcda", "instruction": "Spend an hour in focused study or work. Ask questions and seek to understand deeply.", "meaning": "Pursuing knowledge may reflect the cultural value placed on education and curiosity."},
      {"time": "9:30 AM", "title": "Shai Break with Friends", "emoji": "\ud83c\udf75", "instruction": "Share strong tea with mint or herbs with friends. Talk about life, dreams and daily events.", "meaning": "Tea sharing can build social bonds and reflect the cultural importance of hospitality."},
      {"time": "10:00 AM", "title": "Visit a Historic Site or Museum", "emoji": "\ud83c\udfdb\ufe0f", "instruction": "If possible, visit a local museum, mosque, church or historical site. Learn something new.", "meaning": "Engaging with history can strengthen cultural pride, identity and appreciation for heritage."},
      {"time": "10:30 AM", "title": "Learn Arabic Calligraphy or Poetry", "emoji": "\u270d\ufe0f", "instruction": "Practise writing Arabic letters beautifully or read a poem by a classical Egyptian poet.", "meaning": "Calligraphy and poetry can reflect the deep cultural appreciation for language and artistic expression."},
      {"time": "11:00 AM", "title": "Shop for Fresh Food", "emoji": "\ud83e\udd6c", "instruction": "Visit a local market. Buy fresh bread, vegetables and herbs. Chat with vendors politely.", "meaning": "Market shopping can reflect appreciation for fresh food, community and personal relationships."},
      {"time": "12:00 PM", "title": "Generous Shared Lunch", "emoji": "\ud83c\udf5b", "instruction": "Eat lunch with others and share food generously. Offer the best portion to guests or elders first.", "meaning": "Generous sharing can reflect hospitality, social honour and the belief that guests are a blessing."},
      {"time": "1:00 PM", "title": "Rest or Read", "emoji": "\ud83d\udcd6", "instruction": "Rest for 20-30 minutes, read a book, or listen to music to escape the midday heat.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and adapting to the climate."},
      {"time": "2:00 PM", "title": "Help at Home or School", "emoji": "\ud83c\udfe0", "instruction": "Assist with a task at home, help a younger sibling with homework, or support a classmate.", "meaning": "Helping others can reinforce responsibility, compassion and the value of supporting those around you."},
      {"time": "3:00 PM", "title": "Walk and Talk", "emoji": "\ud83d\udeb6", "instruction": "Take a walk with a family member or friend. Discuss your day, thoughts or dreams.", "meaning": "Walking and talking together can build intimacy, trust and shared understanding."},
      {"time": "4:00 PM", "title": "Prepare Afternoon Tea", "emoji": "\ud83e\uded6", "instruction": "Prepare tea with fresh mint. Serve it to family or guests with small sweets or biscuits.", "meaning": "Afternoon tea can reflect hospitality, care and the joy of welcoming others."},
      {"time": "5:30 PM", "title": "Help Cook Dinner", "emoji": "\ud83c\udf73", "instruction": "Assist with cooking the evening meal: chop vegetables, stir dishes, or set the table.", "meaning": "Contributing to meals can reinforce family cooperation and gratitude for shared effort."},
      {"time": "7:00 PM", "title": "Family Dinner and Discussion", "emoji": "\ud83c\udf72", "instruction": "Eat dinner with family. Discuss current events, family history, or shared memories.", "meaning": "Family meals with discussion can reinforce bonds, pass down knowledge and create belonging."},
      {"time": "8:00 PM", "title": "Evening Walk or Social Visit", "emoji": "\ud83c\udf19", "instruction": "Take an evening walk or visit relatives. Enjoy the cooler air and social connection.", "meaning": "Evening social time can strengthen family ties and create space for relaxed conversation."},
      {"time": "9:30 PM", "title": "Reflect on Heritage", "emoji": "\ud83c\udfdb\ufe0f", "instruction": "Think about one tradition, story, historical figure or value from your culture that shapes who you are.", "meaning": "Reflecting on heritage can strengthen personal identity, cultural pride and connection to history."},
    ]
  },
  /* ===== SOUTH AFRICA ===== */
  {
    id: "south-africa",
    name: "South Africa",
    flag: "\ud83c\uddff\ud83c\udde6",
    background: "South African culture across its diverse communities often values ubuntu \u2014 the belief that 'I am because we are' \u2014 along with respect for elders, communal gathering, and rich oral traditions. Braais, music and multigenerational family life shape many daily experiences.",
    focus: "Ubuntu, respect for elders, communal gathering, oral traditions and multigenerational family.",
    identity: "South African daily habits can shape identity through community solidarity, respect, storytelling and appreciation of diversity.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Prayer or Reflection", "emoji": "\ud83d\ude4f", "instruction": "Begin the day with prayer, meditation or quiet reflection. Give thanks for family and community.", "meaning": "Morning spiritual practice can centre the heart and connect personal values to ubuntu."},
      {"time": "6:30 AM", "title": "Morning Walk or Jog", "emoji": "\ud83c\udfc3", "instruction": "Take a walk or jog outside. Greet neighbours and enjoy the fresh morning air.", "meaning": "Morning exercise can reflect the value of health, community and connection to the land."},
      {"time": "7:00 AM", "title": "Wash and Dress", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress in clean clothes. Take pride in your appearance as you start the day.", "meaning": "Personal grooming can reflect self-respect and dignity in daily life."},
      {"time": "7:30 AM", "title": "Hearty Breakfast", "emoji": "\ud83e\udd5e", "instruction": "Eat a filling breakfast: eggs, toast, porridge or fruit. Share with family if possible.", "meaning": "A hearty breakfast can reflect the value of nourishment and starting the day with energy."},
      {"time": "8:00 AM", "title": "Greet Elders with Respect", "emoji": "\ud83d\ude4f", "instruction": "Greet parents, grandparents or elders with respectful words and attentive listening.", "meaning": "Respectful greetings may reinforce intergenerational care and the wisdom of elders."},
      {"time": "8:30 AM", "title": "Plan to Help Someone", "emoji": "\ud83d\udccb", "instruction": "Think about one person in your community who might need help today. Plan to reach out.", "meaning": "Planning to help others can reflect ubuntu \u2014 the belief that our humanity is connected."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with dedication for an hour. Help a peer who is struggling if you can.", "meaning": "Dedicated effort can reflect the value of education, cooperation and lifting others up."},
      {"time": "9:30 AM", "title": "Tea Break with Others", "emoji": "\u2615", "instruction": "Share tea or rooibos with friends, classmates or colleagues. Talk about life and community.", "meaning": "Social breaks can reinforce bonds and reflect the importance of community connection."},
      {"time": "10:00 AM", "title": "Visit or Call a Relative", "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", "instruction": "Call or visit a relative. Ask about their wellbeing and share news from your life.", "meaning": "Maintaining family connections can reinforce loyalty, care and the extended family circle."},
      {"time": "10:30 AM", "title": "Learn a Word in Another Language", "emoji": "\ud83d\udde3\ufe0f", "instruction": "Learn one word or phrase in isiZulu, isiXhosa, Afrikaans or another South African language.", "meaning": "Language learning can build bridges between communities and foster mutual respect."},
      {"time": "11:00 AM", "title": "Help Prepare Lunch", "emoji": "\ud83c\udf3d", "instruction": "Help prepare pap, chakalaka, or another South African dish. Cook with family.", "meaning": "Cooking together can reinforce cooperation, shared cultural knowledge and family joy."},
      {"time": "12:00 PM", "title": "Shared Communal Lunch", "emoji": "\ud83c\udf72", "instruction": "Eat lunch with family or friends from shared dishes. Pass food and encourage everyone to eat.", "meaning": "Shared meals can strengthen bonds, reflect generosity and embody ubuntu in action."},
      {"time": "1:00 PM", "title": "Rest or Read", "emoji": "\ud83d\udcd6", "instruction": "Rest for 20-30 minutes, read a book, or listen to music. Recharge for the afternoon.", "meaning": "Afternoon rest can support mental clarity, balance and sustained energy."},
      {"time": "2:00 PM", "title": "Outdoor Activity", "emoji": "\ud83c\udf33", "instruction": "Play sport, walk in nature, or garden. Enjoy the South African sunshine and landscape.", "meaning": "Outdoor activity can reflect appreciation for nature, physical health and community play."},
      {"time": "3:00 PM", "title": "Community Service", "emoji": "\ud83e\udd1d", "instruction": "Pick up litter, help a neighbour, or volunteer for a community task. Give back.", "meaning": "Community service can reflect ubuntu, social responsibility and care for the collective."},
      {"time": "4:00 PM", "title": "Visit a Friend or Neighbour", "emoji": "\ud83c\udfe0", "instruction": "Visit someone in your community. Bring a small gift or simply your presence.", "meaning": "Spontaneous visits can reinforce social bonds and the value of personal connection."},
      {"time": "5:30 PM", "title": "Prepare for Braai or Dinner", "emoji": "\ud83d\udd25", "instruction": "Help prepare food for a braai or family dinner. Marinate meat, chop salad, or set the table.", "meaning": "Preparing communal meals can reflect hospitality, cooperation and the joy of gathering."},
      {"time": "7:00 PM", "title": "Braai or Family Dinner", "emoji": "\ud83c\udf56", "instruction": "Eat dinner with family and friends. Share stories, laugh and enjoy the food together.", "meaning": "Shared evening meals can reinforce family bonds, community identity and mutual support."},
      {"time": "8:00 PM", "title": "Music or Storytelling", "emoji": "\ud83c\udfb5", "instruction": "Listen to music, share stories, or discuss community matters with family and friends.", "meaning": "Music and storytelling can preserve cultural memory and strengthen community identity."},
      {"time": "9:30 PM", "title": "Reflect on Ubuntu", "emoji": "\ud83c\udf0d", "instruction": "Think about one way someone helped you today and one way you practised ubuntu.", "meaning": "Reflection on ubuntu can build gratitude, reciprocity and awareness of our interconnectedness."},
    ]
  },
  /* ===== MEXICO ===== */
  {
    id: "mexico",
    name: "Mexico",
    flag: "\ud83c\uddf2\ud83c\uddfd",
    background: "Mexican culture often places great importance on family closeness, community celebrations, rich food traditions, and warm social interactions. Hospitality and togetherness are central to many daily experiences.",
    focus: "Family, community, food traditions, celebration and social warmth.",
    identity: "Mexican daily habits can shape identity through family closeness, community connection, food traditions and social warmth.",
    tasks: [
      {"time": "6:00 AM", "title": "Warm Morning Greeting", "emoji": "\u2600\ufe0f", "instruction": "Greet every family member with warmth, a smile or a hug. Ask how they slept.", "meaning": "Warm morning greetings may reinforce affection, family connection and emotional security."},
      {"time": "6:30 AM", "title": "Light Exercise or Stretching", "emoji": "\ud83c\udfc3", "instruction": "Do light stretching, yoga, or take a short walk around your neighbourhood.", "meaning": "Morning movement can reflect the value of health, energy and starting the day actively."},
      {"time": "7:00 AM", "title": "Shower and Dress", "emoji": "\ud83e\uddfc", "instruction": "Take a shower and dress in bright, comfortable clothes. Present yourself with joy.", "meaning": "Personal grooming can reflect self-respect and the cultural celebration of colour and life."},
      {"time": "7:30 AM", "title": "Hearty Breakfast", "emoji": "\ud83c\udf2e", "instruction": "Eat a breakfast such as eggs, tortillas, beans, fresh fruit or atole. Sit with family.", "meaning": "A hearty breakfast can reflect the cultural value of nourishment and starting the day with abundance."},
      {"time": "8:00 AM", "title": "Check on Extended Family", "emoji": "\u2764\ufe0f", "instruction": "Call, message or speak to a relative you have not seen recently. Tell them you are thinking of them.", "meaning": "Staying connected to extended family can reinforce loyalty and the wide circle of family love."},
      {"time": "8:30 AM", "title": "Prepare for the Day", "emoji": "\ud83c\udf92", "instruction": "Organise your belongings and set your intentions. Approach the day with positivity.", "meaning": "Preparation can reflect discipline and respect for your own goals and commitments."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Dedicate an hour to focused work or study. Give your full effort and attention.", "meaning": "Dedicated effort can reflect the cultural value of hard work, persistence and self-improvement."},
      {"time": "9:30 AM", "title": "Coffee and Social Break", "emoji": "\u2615", "instruction": "Have coffee or hot chocolate with a friend or colleague. Talk about life and dreams.", "meaning": "Social breaks can maintain relationships and reflect the importance of connection in daily life."},
      {"time": "10:00 AM", "title": "Help a Neighbour", "emoji": "\ud83e\udd1d", "instruction": "Offer help to a neighbour: carry groceries, watch children, or simply chat.", "meaning": "Helping neighbours can reinforce community spirit, solidarity and mutual support."},
      {"time": "10:30 AM", "title": "Learn About Mexican History", "emoji": "\ud83d\udcd6", "instruction": "Read or watch something about Mexican history, art or a cultural tradition.", "meaning": "Learning about heritage can strengthen cultural pride, identity and appreciation for roots."},
      {"time": "11:00 AM", "title": "Prepare Fresh Ingredients", "emoji": "\ud83c\udf36\ufe0f", "instruction": "Help chop vegetables, make tortillas, or prepare salsa for the upcoming meal.", "meaning": "Food preparation can reflect care for family and appreciation of fresh, traditional ingredients."},
      {"time": "12:00 PM", "title": "Shared Meal with Family", "emoji": "\ud83e\udd58", "instruction": "Eat a shared meal with family or friends. Pass food to others first and enjoy the conversation.", "meaning": "Shared meals can strengthen family ties, celebrate togetherness and honour communal dining."},
      {"time": "1:00 PM", "title": "Siesta or Quiet Time", "emoji": "\ud83d\ude0c", "instruction": "Rest for 20-30 minutes, read, or listen to music. Recharge in the afternoon heat.", "meaning": "Afternoon rest can reflect wisdom about pacing, health and balancing activity with renewal."},
      {"time": "2:00 PM", "title": "Creative Activity", "emoji": "\ud83c\udfa8", "instruction": "Draw, paint, make crafts, or listen to Mexican music. Express yourself creatively.", "meaning": "Creative expression can foster joy, cultural pride and emotional wellbeing."},
      {"time": "3:00 PM", "title": "Walk or Play Outside", "emoji": "\ud83c\udf33", "instruction": "Go outside for a walk, play football, or enjoy the sunshine with friends or family.", "meaning": "Outdoor activity can encourage physical health and appreciation for nature and community."},
      {"time": "4:00 PM", "title": "Afternoon Snack and Chat", "emoji": "\ud83c\udf6a", "instruction": "Share pan dulce, fruit, or a small snack with family. Talk about your day.", "meaning": "Afternoon snacks can create small rituals of togetherness and family connection."},
      {"time": "5:30 PM", "title": "Help Cook Dinner", "emoji": "\ud83c\udf73", "instruction": "Help prepare dinner: chop vegetables, stir dishes, or make fresh tortillas alongside family.", "meaning": "Cooking together can reinforce cooperation, shared cultural knowledge and family joy."},
      {"time": "7:00 PM", "title": "Family Dinner and Laughter", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat dinner with family. Share stories, jokes and laughter. Everyone should speak.", "meaning": "Family meals with laughter can reinforce closeness, joy and the value of shared daily life."},
      {"time": "8:00 PM", "title": "Music or Dance", "emoji": "\ud83d\udc83", "instruction": "Listen to mariachi, cumbia, or regional music. Dance or sing with family.", "meaning": "Music and dance can foster joy, cultural expression and emotional connection."},
      {"time": "9:30 PM", "title": "Gratitude to Family", "emoji": "\ud83d\udc8c", "instruction": "Tell someone in your family specifically why you appreciate them. Be detailed and sincere.", "meaning": "Expressing appreciation may deepen social bonds and create emotional connection."},
    ]
  },
  /* ===== UNITED STATES ===== */
  {
    id: "usa",
    name: "United States",
    flag: "\ud83c\uddfa\ud83c\uddf8",
    background: "American culture is highly diverse, but in many contexts values such as individual expression, community volunteering, direct communication, and work ethic are emphasised. Regional and ethnic diversity means daily habits can vary widely across the country.",
    focus: "Individual expression, community involvement, direct communication and diversity.",
    identity: "American daily habits can shape identity by encouraging self-expression, community participation, open communication and appreciation of diversity.",
    tasks: [
      {"time": "6:00 AM", "title": "Personal Morning Routine", "emoji": "\u2615", "instruction": "Create a morning routine that works for you \u2014 exercise, reading, journaling or quiet time.", "meaning": "A personal morning routine can reflect individualism, self-care and starting the day intentionally."},
      {"time": "6:30 AM", "title": "Workout or Walk", "emoji": "\ud83c\udfc3", "instruction": "Go to the gym, run, bike, or walk for 30 minutes. Take care of your physical health.", "meaning": "Morning exercise can reflect the value of health, discipline and personal wellbeing."},
      {"time": "7:00 AM", "title": "Shower and Dress", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress for the day. Choose clothes that express your personal style.", "meaning": "Personal style can reflect individuality, confidence and self-expression."},
      {"time": "7:30 AM", "title": "Quick Breakfast", "emoji": "\ud83e\udd5e", "instruction": "Eat a practical breakfast: cereal, toast, fruit, eggs or a smoothie. Fuel your body.", "meaning": "A practical breakfast can reflect a focus on energy, health and preparing for an active day."},
      {"time": "8:00 AM", "title": "Friendly Greeting", "emoji": "\ud83d\udc4b", "instruction": "Greet classmates, teachers or colleagues with a friendly word, smile or wave.", "meaning": "Friendly greetings may create an open, welcoming atmosphere and break down social barriers."},
      {"time": "8:30 AM", "title": "Set Daily Goals", "emoji": "\ud83d\udccb", "instruction": "Write down three goals for today. Prioritise what matters most to you.", "meaning": "Goal-setting can reflect ambition, organisation and personal agency."},
      {"time": "9:00 AM", "title": "Speak Up in Class or Work", "emoji": "\ud83d\udde3\ufe0f", "instruction": "Share an idea, ask a question or contribute to a discussion. Your voice matters.", "meaning": "Speaking up can encourage self-confidence and the belief that every perspective has value."},
      {"time": "9:30 AM", "title": "Coffee Break with Peers", "emoji": "\u2615", "instruction": "Grab coffee with friends or colleagues. Discuss hobbies, sports or weekend plans.", "meaning": "Casual social interaction can build peer connections and a sense of belonging."},
      {"time": "10:00 AM", "title": "Help Your Community", "emoji": "\ud83e\udd1d", "instruction": "Do one small act of service: pick up litter, hold a door, tutor a peer, or help a neighbour.", "meaning": "Community service can reflect social responsibility and the value of giving back."},
      {"time": "10:30 AM", "title": "Pursue a Personal Interest", "emoji": "\ud83c\udfa8", "instruction": "Spend 30 minutes on a hobby, sport, art or skill you enjoy. Do it because you love it.", "meaning": "Pursuing personal interests can encourage individuality, creativity and a well-rounded self."},
      {"time": "11:00 AM", "title": "Learn About Another Culture", "emoji": "\ud83c\udf0f", "instruction": "Read, watch or talk to someone from a different background. Learn one new thing.", "meaning": "Cultural curiosity can build empathy, broaden perspective and appreciation for diversity."},
      {"time": "12:00 PM", "title": "Casual Lunch with Friends", "emoji": "\ud83e\udd6a", "instruction": "Eat lunch with friends or classmates. Discuss your interests, plans or opinions openly.", "meaning": "Casual social meals can build peer connections and confidence in conversation."},
      {"time": "1:00 PM", "title": "Power Nap or Meditation", "emoji": "\ud83d\ude0c", "instruction": "Take a 15-20 minute nap or practise meditation to recharge your mind.", "meaning": "Rest can support mental clarity, productivity and balance in a busy day."},
      {"time": "2:00 PM", "title": "Collaborative Project", "emoji": "\ud83d\udc65", "instruction": "Work on a group project or team task. Share responsibilities and celebrate each other's strengths.", "meaning": "Teamwork can reflect the value of cooperation, diverse skills and collective achievement."},
      {"time": "3:00 PM", "title": "Outdoor Break", "emoji": "\ud83c\udf33", "instruction": "Step outside for fresh air. Walk around the block, stretch, or simply look at the sky.", "meaning": "Outdoor breaks can restore energy and reflect appreciation for nature."},
      {"time": "4:00 PM", "title": "Snack and Socialise", "emoji": "\ud83c\udf6a", "instruction": "Have a snack and chat with someone new. Break the ice with a question about their interests.", "meaning": "Casual socialising can build new friendships and expand your social network."},
      {"time": "5:30 PM", "title": "Cook or Order Dinner", "emoji": "\ud83c\udf55", "instruction": "Cook a simple meal or share takeout with family or roommates. Eat together if possible.", "meaning": "Shared meals can reinforce social bonds and create moments of connection."},
      {"time": "7:00 PM", "title": "Dinner and Share Your Day", "emoji": "\ud83d\udcac", "instruction": "Eat dinner with family or friends and share one highlight, one challenge and one goal.", "meaning": "Sharing daily experiences can build trust, emotional connection and mutual support."},
      {"time": "8:00 PM", "title": "Evening Entertainment", "emoji": "\ud83d\udcfa", "instruction": "Watch a show, play a game, or pursue a hobby. Enjoy your personal time.", "meaning": "Evening leisure can reflect the value of work-life balance and personal fulfilment."},
      {"time": "9:30 PM", "title": "Reflect on Goals", "emoji": "\ud83e\udd14", "instruction": "Think about one personal goal you are working toward and one way you helped your community today.", "meaning": "Balancing personal and community goals can shape a well-rounded, purposeful identity."},
    ]
  },
  /* ===== CANADA ===== */
  {
    id: "canada",
    name: "Canada",
    flag: "\ud83c\udde8\ud83c\udde6",
    background: "Canadian culture often values politeness, multicultural inclusion, outdoor activity, and social responsibility. In many contexts, hockey, nature, and a commitment to fairness shape how people interact with each other and the environment.",
    focus: "Politeness, multicultural inclusion, outdoor activity, fairness and social responsibility.",
    identity: "Canadian daily habits can shape identity through courtesy, environmental care, respect for diversity and community mindedness.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Coffee and Quiet", "emoji": "\u2615", "instruction": "Wake up, make coffee or tea, and enjoy a few quiet minutes before the day begins.", "meaning": "Morning quiet can reflect the value of calm starts, personal reflection and readiness."},
      {"time": "6:30 AM", "title": "Morning Walk or Skate", "emoji": "\ud83c\udfc3", "instruction": "Walk, jog, skate, or ski depending on the season. Embrace the outdoor weather.", "meaning": "Outdoor activity in all seasons can reflect resilience, health and appreciation for nature."},
      {"time": "7:00 AM", "title": "Shower and Dress in Layers", "emoji": "\ud83e\udde3", "instruction": "Shower and dress appropriately for the weather. Layers are essential.", "meaning": "Dressing for weather can reflect practicality, preparedness and adaptation to the environment."},
      {"time": "7:30 AM", "title": "Hearty Breakfast", "emoji": "\ud83e\udd5e", "instruction": "Eat a filling breakfast: eggs, bacon, pancakes, oatmeal or fruit. Start with energy.", "meaning": "A hearty breakfast can reflect the value of nourishment and preparing for an active day."},
      {"time": "8:00 AM", "title": "Polite Greeting", "emoji": "\ud83d\udc4b", "instruction": "Greet people with a friendly 'Good morning' or 'How's it going?' Be genuinely kind.", "meaning": "Polite greetings can create an inclusive, welcoming atmosphere where everyone feels respected."},
      {"time": "8:30 AM", "title": "Check Weather and Plan", "emoji": "\ud83d\udccb", "instruction": "Check the weather, plan your route and prepare for the day. Be ready for changes.", "meaning": "Planning can reflect practicality, preparedness and respect for the unpredictable climate."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with dedication. Help a classmate or colleague if they need support.", "meaning": "Dedicated effort can reflect the value of hard work, cooperation and mutual support."},
      {"time": "9:30 AM", "title": "Coffee Break with Others", "emoji": "\u2615", "instruction": "Have coffee or tea with friends or colleagues. Talk about hockey, weather or weekend plans.", "meaning": "Social breaks can build relationships and reflect the cultural importance of casual connection."},
      {"time": "10:00 AM", "title": "Hold a Door or Small Kindness", "emoji": "\ud83e\udd1d", "instruction": "Hold a door, say sorry if you bump someone, or offer a small kindness today.", "meaning": "Small courtesies can reflect the cultural value of politeness and consideration for others."},
      {"time": "10:30 AM", "title": "Learn About Indigenous Culture", "emoji": "\ud83e\udeb6", "instruction": "Read or watch something about Indigenous Canadian culture, history or art.", "meaning": "Learning about Indigenous heritage can build respect, awareness and appreciation for First Nations."},
      {"time": "11:00 AM", "title": "Prepare for Lunch", "emoji": "\ud83e\udd6a", "instruction": "Make or buy lunch. Choose something nourishing and perhaps from a local business.", "meaning": "Supporting local businesses can reflect community care and appreciation for local economies."},
      {"time": "12:00 PM", "title": "Lunch with Diverse Friends", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat lunch with friends from different backgrounds. Learn about their traditions.", "meaning": "Multicultural lunches can build cross-cultural understanding and appreciation for diversity."},
      {"time": "1:00 PM", "title": "Short Walk Outside", "emoji": "\ud83c\udf32", "instruction": "Take a walk outside, even if cold. Breathe fresh air and observe the landscape.", "meaning": "Outdoor breaks can restore energy and reflect appreciation for Canada's natural beauty."},
      {"time": "2:00 PM", "title": "Environmental Action", "emoji": "\u267b\ufe0f", "instruction": "Recycle properly, reduce waste, or pick up litter. Make one green choice today.", "meaning": "Environmental care can reflect responsibility for the planet and future generations."},
      {"time": "3:00 PM", "title": "Help a Classmate or Colleague", "emoji": "\ud83e\udd1d", "instruction": "Offer help with homework, a work task, or simply listen to someone who needs to talk.", "meaning": "Helping others can reinforce community spirit, empathy and the value of mutual support."},
      {"time": "4:00 PM", "title": "Snack and Relax", "emoji": "\ud83c\udf6a", "instruction": "Have a snack and relax for a few minutes. Watch a funny video or chat with a friend.", "meaning": "Afternoon relaxation can support mental health and balance in a busy day."},
      {"time": "5:30 PM", "title": "Cook or Share Dinner", "emoji": "\ud83c\udf73", "instruction": "Cook a meal or share food with family, roommates or friends. Keep it simple and warm.", "meaning": "Shared meals can reinforce social bonds and create moments of warmth and connection."},
      {"time": "7:00 PM", "title": "Family Time or Hobby", "emoji": "\ud83d\udcfa", "instruction": "Spend time with family, watch a hockey game, or pursue a hobby you enjoy.", "meaning": "Evening leisure can reflect the value of balance, family and personal interests."},
      {"time": "8:00 PM", "title": "Evening Walk or Hockey", "emoji": "\ud83c\udfd2", "instruction": "Take an evening walk, play street hockey, or enjoy the outdoors with friends.", "meaning": "Evening activity can encourage physical health and community play."},
      {"time": "9:30 PM", "title": "Reflect on Kindness", "emoji": "\ud83d\udcad", "instruction": "Think about one kind thing you did today and one thing you are grateful for in your community.", "meaning": "Reflection can strengthen gratitude, social responsibility and commitment to kindness."},
    ]
  },
  /* ===== BRAZIL ===== */
  {
    id: "brazil",
    name: "Brazil",
    flag: "\ud83c\udde7\ud83c\uddf7",
    background: "Brazilian culture often celebrates warmth, social connection, music, and outdoor life. In many contexts, relationships are built through expressive communication, shared meals, and collective joy, while flexibility and adaptability are valued traits.",
    focus: "Warmth, social connection, music, outdoor life and expressive communication.",
    identity: "Brazilian daily habits can shape identity through social warmth, expressive joy, adaptability and appreciation of community.",
    tasks: [
      {"time": "6:00 AM", "title": "Bright Morning Greeting", "emoji": "\u2600\ufe0f", "instruction": "Greet people around you with genuine warmth, a big smile and positive energy.", "meaning": "A warm greeting can set a joyful tone and reflect social openness and emotional generosity."},
      {"time": "6:30 AM", "title": "Morning Exercise on the Beach", "emoji": "\ud83c\udfd6\ufe0f", "instruction": "If possible, exercise on the beach or in a park. Otherwise, stretch or jog in your neighbourhood.", "meaning": "Morning outdoor exercise can reflect appreciation for nature, sunshine and physical vitality."},
      {"time": "7:00 AM", "title": "Wash and Dress Vibrantly", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress in bright, colourful clothes. Brazilians often celebrate life through colour.", "meaning": "Vibrant dressing can reflect joy, confidence and the cultural celebration of life."},
      {"time": "7:30 AM", "title": "Fruit-Filled Breakfast", "emoji": "\ud83c\udf4c", "instruction": "Eat a breakfast with fresh fruit, bread or a smoothie. Choose colourful, natural foods.", "meaning": "A fresh breakfast can reflect the cultural appreciation for natural, vibrant food and bodily vitality."},
      {"time": "8:00 AM", "title": "Compliment Someone Sincerely", "emoji": "\ud83d\udc9b", "instruction": "Give someone a genuine, specific compliment about their personality, effort or kindness.", "meaning": "Sincere compliments may spread positivity, build self-esteem and strengthen connections."},
      {"time": "8:30 AM", "title": "Share a Plan with Friends", "emoji": "\ud83d\udcf1", "instruction": "Message friends about meeting later. Brazilians value social connection and spontaneity.", "meaning": "Social planning can reflect the cultural importance of relationships and communal joy."},
      {"time": "9:00 AM", "title": "Focused Morning Work", "emoji": "\u270f\ufe0f", "instruction": "Work or study with focus for an hour. Then reward yourself with a social break.", "meaning": "Balanced work can reflect discipline while respecting the need for social connection."},
      {"time": "9:30 AM", "title": "Coffee and Chat", "emoji": "\u2615", "instruction": "Have cafezinho (strong coffee) with friends or colleagues. Talk passionately about life.", "meaning": "Coffee conversations can build relationships and reflect the cultural love of lively interaction."},
      {"time": "10:00 AM", "title": "Visit a Friend Unexpectedly", "emoji": "\ud83c\udfe0", "instruction": "Drop by a friend's house or call them spontaneously. Brazilians value impromptu social visits.", "meaning": "Spontaneous visits can reflect warmth, flexibility and the value of personal presence."},
      {"time": "10:30 AM", "title": "Learn a Dance Move", "emoji": "\ud83d\udc83", "instruction": "Learn a few steps of samba, forro, or another Brazilian dance. Move your body with joy.", "meaning": "Dance can reflect the cultural love of music, movement and emotional expression."},
      {"time": "11:00 AM", "title": "Prepare Fresh Ingredients", "emoji": "\ud83c\udf3d", "instruction": "Help prepare fresh vegetables, fruits or ingredients for lunch. Cook with colour and flavour.", "meaning": "Food preparation can reflect appreciation for fresh, vibrant ingredients and culinary joy."},
      {"time": "12:00 PM", "title": "Relaxed Shared Lunch", "emoji": "\ud83c\udf72", "instruction": "Eat lunch with others in a relaxed way. Talk, laugh, share stories and do not rush.", "meaning": "A leisurely shared meal can strengthen bonds and reflect enjoyment of social time."},
      {"time": "1:00 PM", "title": "Siesta or Relaxation", "emoji": "\ud83d\ude0c", "instruction": "Rest for 20-30 minutes, listen to music, or relax in a hammock if possible.", "meaning": "Afternoon rest can reflect wisdom about pacing and balancing energy throughout the day."},
      {"time": "2:00 PM", "title": "Music or Movement Break", "emoji": "\ud83c\udfb5", "instruction": "Listen to Brazilian music, tap your feet, sing along, or dance for at least 10 minutes.", "meaning": "Music and movement can express emotion, release stress and build joy."},
      {"time": "3:00 PM", "title": "Outdoor Social Time", "emoji": "\ud83c\udf34", "instruction": "Spend time outside with friends or family in a park, courtyard or open space.", "meaning": "Outdoor social time can reflect appreciation for nature, sunshine and communal life."},
      {"time": "4:00 PM", "title": "Afternoon Snack and Chat", "emoji": "\ud83c\udf6a", "instruction": "Share a snack such as pao de queijo, fruit, or juice with friends or family.", "meaning": "Afternoon snacks can create small rituals of togetherness and cultural food appreciation."},
      {"time": "5:30 PM", "title": "Cook Together", "emoji": "\ud83d\udc68\u200d\ud83c\udf73", "instruction": "Help prepare a simple meal with family or friends. Chop, stir, taste and laugh together.", "meaning": "Cooking together can reinforce cooperation, shared pleasure and the joy of creating as a group."},
      {"time": "7:00 PM", "title": "Family Dinner and Stories", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat dinner with family. Share stories, jokes and opinions with passion and laughter.", "meaning": "Expressive family meals can reinforce closeness, joy and cultural identity."},
      {"time": "8:00 PM", "title": "Evening Music or Socialising", "emoji": "\ud83c\udfb6", "instruction": "Listen to music, play instruments, or socialise with neighbours and friends.", "meaning": "Evening music can foster joy, cultural expression and community connection."},
      {"time": "9:30 PM", "title": "Express Gratitude Openly", "emoji": "\u2764\ufe0f", "instruction": "Tell someone openly and warmly why you value their friendship, presence or kindness.", "meaning": "Open expression of gratitude may deepen trust, emotional connection and warmth."},
    ]
  },
  /* ===== ARGENTINA ===== */
  {
    id: "argentina",
    name: "Argentina",
    flag: "\ud83c\udde6\ud83c\uddf7",
    background: "Argentine culture often values deep friendship, family gatherings, and expressive conversation. In many contexts, sharing mate tea, enjoying meals together, and engaging in passionate dialogue are central to building social bonds.",
    focus: "Deep friendship, family gatherings, shared rituals, expressive conversation.",
    identity: "Argentine daily habits can shape identity through loyalty, passionate expression, family devotion and appreciation of shared rituals.",
    tasks: [
      {"time": "6:00 AM", "title": "Slow Morning with Mate", "emoji": "\u2615", "instruction": "Wake up slowly and prepare mate or a warm drink. Sit quietly and plan your day.", "meaning": "A slow morning can reflect the value of contemplation, warmth and personal preparation."},
      {"time": "6:30 AM", "title": "Morning Walk or Jog", "emoji": "\ud83d\udeb6", "instruction": "Take a walk or jog around your neighbourhood or a nearby park. Greet people you pass.", "meaning": "Morning walks can reflect appreciation for community, health and the neighbourhood."},
      {"time": "7:00 AM", "title": "Wash and Dress", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress with care. Argentines often value looking presentable and stylish.", "meaning": "Personal grooming can reflect self-respect and the cultural value of aesthetic presentation."},
      {"time": "7:30 AM", "title": "Medialunas or Light Breakfast", "emoji": "\ud83e\udd50", "instruction": "Eat medialunas, toast, fruit or a light breakfast with coffee or mate.", "meaning": "A simple breakfast can reflect the value of easing into the day with simple pleasures."},
      {"time": "8:00 AM", "title": "Warm Embrace or Greeting", "emoji": "\ud83e\udd17", "instruction": "Greet a friend or family member with a warm hug, kiss on the cheek or genuinely kind words.", "meaning": "Physical warmth in greetings may reinforce affection, trust and closeness."},
      {"time": "8:30 AM", "title": "Plan Social Meetings", "emoji": "\ud83d\udcc5", "instruction": "Think about who you will share mate or meals with today. Relationships are central to life.", "meaning": "Social planning can reflect the cultural importance of friendship and family in daily life."},
      {"time": "9:00 AM", "title": "Focused Work with Passion", "emoji": "\u270f\ufe0f", "instruction": "Work or study with dedication and passion. Give your full effort to whatever you do.", "meaning": "Passionate effort can reflect the cultural value of putting your heart into your work."},
      {"time": "9:30 AM", "title": "Mate with Friends", "emoji": "\ud83e\uddc9", "instruction": "Share mate with friends or family. Pass the gourd around and talk about life.", "meaning": "Mate sharing can reflect equality, trust and communal identity through equal participation."},
      {"time": "10:00 AM", "title": "Passionate Conversation", "emoji": "\ud83d\udcac", "instruction": "Engage in a conversation about something you care about. Express your feelings openly.", "meaning": "Passionate dialogue can reflect the cultural value of emotional honesty and engagement."},
      {"time": "10:30 AM", "title": "Visit a Friend or Relative", "emoji": "\ud83c\udfe0", "instruction": "Visit someone unexpectedly or call them. Argentines value spontaneous social connection.", "meaning": "Spontaneous visits can reinforce social bonds and the value of personal presence."},
      {"time": "11:00 AM", "title": "Shop for Fresh Ingredients", "emoji": "\ud83e\udd69", "instruction": "Visit a butcher, bakery or market. Choose fresh ingredients for asado or dinner.", "meaning": "Shopping for fresh food can reflect appreciation for quality, tradition and local producers."},
      {"time": "12:00 PM", "title": "Long Lunch with Deep Talk", "emoji": "\ud83e\udd69", "instruction": "Eat a leisurely lunch with family or friends for at least an hour. Discuss ideas and dreams.", "meaning": "A long, talkative lunch can strengthen bonds and reflect appreciation for meaningful dialogue."},
      {"time": "1:00 PM", "title": "Siesta or Quiet Reading", "emoji": "\ud83d\ude0c", "instruction": "Rest for 20-30 minutes, read, or simply sit quietly. Recharge for the afternoon.", "meaning": "Afternoon rest can reflect wisdom about pacing and the value of slowing down."},
      {"time": "2:00 PM", "title": "Walk and Talk", "emoji": "\ud83d\udeb6", "instruction": "Take a walk with someone and talk about your thoughts, dreams or daily events.", "meaning": "Walking and talking together can build intimacy and emotional connection."},
      {"time": "3:00 PM", "title": "Mate Circle with Friends", "emoji": "\ud83e\uddc9", "instruction": "Sit with friends in a circle. Share mate and snacks while talking about life.", "meaning": "Shared drinking circles can reinforce equality, trust and communal identity."},
      {"time": "4:00 PM", "title": "Learn About Argentine Culture", "emoji": "\ud83d\udcd6", "instruction": "Read about tango, gaucho culture, or Argentine literature. Share what you learned.", "meaning": "Cultural learning can strengthen identity and appreciation for heritage."},
      {"time": "5:30 PM", "title": "Prepare Asado or Dinner", "emoji": "\ud83d\udd25", "instruction": "Help prepare asado or dinner. Marinate meat, chop salad, or set the table.", "meaning": "Preparing communal meals can reflect hospitality, cooperation and cultural tradition."},
      {"time": "7:00 PM", "title": "Family Dinner and Debate", "emoji": "\ud83c\udf77", "instruction": "Have dinner with family and discuss a topic everyone has an opinion on. Respect different views.", "meaning": "Respectful debate can strengthen critical thinking and appreciation for diverse perspectives."},
      {"time": "8:00 PM", "title": "Tango Music or Social Visit", "emoji": "\ud83c\udfb5", "instruction": "Listen to tango, visit friends, or enjoy the evening social atmosphere.", "meaning": "Evening culture can foster joy, artistic appreciation and community connection."},
      {"time": "9:30 PM", "title": "Reflect on Friendship", "emoji": "\ud83d\udcad", "instruction": "Think about one friend who has shaped your life. What does loyalty mean to you?", "meaning": "Reflecting on friendship can strengthen appreciation for deep bonds and commitment."},
    ]
  },
  /* ===== PERU ===== */
  {
    id: "peru",
    name: "Peru",
    flag: "\ud83c\uddf5\ud83c\uddea",
    background: "Peruvian culture across its diverse regions often values family unity, respect for Pachamama (Mother Earth), rich culinary traditions, and communal work. In many contexts, ancient Inca and indigenous traditions continue to influence modern daily life.",
    focus: "Family unity, respect for Pachamama, culinary traditions, communal work and indigenous heritage.",
    identity: "Peruvian daily habits can shape identity through family devotion, environmental respect, cultural pride and community solidarity.",
    tasks: [
      {"time": "6:00 AM", "title": "Greet the Sun", "emoji": "\ud83c\udf05", "instruction": "Step outside and greet the morning sun with gratitude. Many Peruvians honour the sun's energy.", "meaning": "Honouring the sun can reflect indigenous connection to nature, gratitude and spiritual awareness."},
      {"time": "6:30 AM", "title": "Morning Exercise in the Mountains", "emoji": "\ud83c\udfd4\ufe0f", "instruction": "If possible, walk or exercise in nature. Otherwise, stretch at home with fresh air.", "meaning": "Morning nature connection can reflect respect for Pachamama and physical vitality."},
      {"time": "7:00 AM", "title": "Wash with Cold Water", "emoji": "\ud83e\uddfc", "instruction": "Wash your face with cold water to wake up. Dress in layers for the altitude or climate.", "meaning": "Cold water cleansing can reflect resilience, freshness and adaptation to the environment."},
      {"time": "7:30 AM", "title": "Hearty Andean Breakfast", "emoji": "\ud83e\udd63", "instruction": "Eat a filling breakfast: quinoa porridge, bread, cheese, or fresh fruit. Start with strength.", "meaning": "Traditional breakfast can connect people to Andean heritage and nourishment."},
      {"time": "8:00 AM", "title": "Respectful Family Greeting", "emoji": "\ud83d\ude4f", "instruction": "Greet family members warmly. Ask for their blessing or advice for the day.", "meaning": "Respectful greetings can reinforce family bonds, intergenerational care and harmony."},
      {"time": "8:30 AM", "title": "Plan Community Help", "emoji": "\ud83d\udccb", "instruction": "Think about one way you can help your family or community today.", "meaning": "Community planning can reflect the cultural value of solidarity and mutual support."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with concentration. Approach tasks with patience and thoroughness.", "meaning": "Dedicated effort can reflect discipline and the value of doing things well."},
      {"time": "9:30 AM", "title": "Coca Tea Break", "emoji": "\ud83c\udf75", "instruction": "Drink coca tea or herbal tea if available. Otherwise, enjoy any warm tea with friends.", "meaning": "Tea rituals can build social bonds and reflect traditional healing and hospitality."},
      {"time": "10:00 AM", "title": "Visit a Market or Artisan", "emoji": "\ud83e\uddf6", "instruction": "Visit a local market or artisan. Buy fresh ingredients or admire handmade crafts.", "meaning": "Market visits can reflect appreciation for local production, craftsmanship and community."},
      {"time": "10:30 AM", "title": "Learn About Inca History", "emoji": "\ud83c\udfdb\ufe0f", "instruction": "Read or watch something about Inca history, Machu Picchu, or Peruvian indigenous culture.", "meaning": "Learning about heritage can strengthen cultural pride and appreciation for ancient wisdom."},
      {"time": "11:00 AM", "title": "Prepare Fresh Ingredients", "emoji": "\ud83c\udf3d", "instruction": "Help wash, peel or prepare fresh potatoes, corn, or vegetables for lunch.", "meaning": "Food preparation can reflect care for family and appreciation of native ingredients."},
      {"time": "12:00 PM", "title": "Shared Communal Lunch", "emoji": "\ud83c\udf72", "instruction": "Eat lunch with family from shared dishes. Serve elders first and share generously.", "meaning": "Communal eating can strengthen bonds, reflect generosity and embody family unity."},
      {"time": "1:00 PM", "title": "Rest Under the Sun or Shade", "emoji": "\ud83d\ude0c", "instruction": "Rest for 20-30 minutes in a comfortable spot. Recharge your energy.", "meaning": "Afternoon rest can reflect wisdom about pacing and adapting to altitude or climate."},
      {"time": "2:00 PM", "title": "Weave, Knit or Craft", "emoji": "\ud83e\uddf5", "instruction": "Practise weaving, knitting, or another traditional craft. Create something with your hands.", "meaning": "Traditional crafts can preserve indigenous knowledge and strengthen cultural identity."},
      {"time": "3:00 PM", "title": "Walk in Nature or Fields", "emoji": "\ud83c\udf3e", "instruction": "Walk through fields, hills, or nature near your home. Observe plants, animals and the land.", "meaning": "Nature walks can reflect respect for Pachamama and connection to the earth."},
      {"time": "4:00 PM", "title": "Share a Snack with Neighbours", "emoji": "\ud83c\udf6a", "instruction": "Share fruit, bread, or a small snack with neighbours or family. Offer what you have.", "meaning": "Sharing food can reinforce community spirit, generosity and neighbourly bonds."},
      {"time": "5:30 PM", "title": "Help Cook Dinner", "emoji": "\ud83c\udf73", "instruction": "Assist with cooking ceviche, lomo saltado, or another Peruvian dish with family.", "meaning": "Cooking traditional food can preserve heritage and strengthen family bonds."},
      {"time": "7:00 PM", "title": "Family Dinner and Gratitude", "emoji": "\ud83c\udf7d\ufe0f", "instruction": "Eat dinner with family. Express gratitude for the food and the hands that prepared it.", "meaning": "Gratitude at meals can reinforce family bonds and respect for nourishment."},
      {"time": "8:00 PM", "title": "Music or Dance", "emoji": "\ud83c\udfb5", "instruction": "Listen to Peruvian music, pan flutes, or dance marinera with family.", "meaning": "Music and dance can foster joy, cultural expression and connection to heritage."},
      {"time": "9:30 PM", "title": "Reflect on Pachamama", "emoji": "\ud83c\udf0d", "instruction": "Think about one way nature supported you today and one way you can respect the earth tomorrow.", "meaning": "Reflection on nature can strengthen environmental consciousness and gratitude for the land."},
    ]
  },
  /* ===== CHILE ===== */
  {
    id: "chile",
    name: "Chile",
    flag: "\ud83c\udde8\ud83c\uddf1",
    background: "Chilean culture across its long geography often values family ties, resilience, literary tradition, and connection to both the mountains and the sea. In many contexts, asado gatherings, poetry, and strong social bonds define daily life.",
    focus: "Family ties, resilience, literary tradition, mountain and sea connection.",
    identity: "Chilean daily habits can shape identity through perseverance, poetic expression, family devotion and appreciation of nature's extremes.",
    tasks: [
      {"time": "6:00 AM", "title": "Morning Coffee and View", "emoji": "\u2615", "instruction": "Wake up and drink coffee while looking at the mountains, sea, or landscape.", "meaning": "Morning contemplation can reflect appreciation for Chile's dramatic geography and daily beauty."},
      {"time": "6:30 AM", "title": "Walk or Exercise", "emoji": "\ud83c\udfc3", "instruction": "Take a walk, jog, or exercise outside. Breathe in the fresh mountain or ocean air.", "meaning": "Outdoor exercise can reflect resilience, health and connection to the natural environment."},
      {"time": "7:00 AM", "title": "Shower and Dress", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress practically for the weather. Layers are essential in variable climates.", "meaning": "Practical dressing can reflect adaptation, preparedness and respect for nature."},
      {"time": "7:30 AM", "title": "Bread and Tea Breakfast", "emoji": "\ud83c\udf5e", "instruction": "Eat breakfast with fresh bread, butter, jam, or avocado. Drink tea or coffee.", "meaning": "Simple breakfast can reflect the value of fresh, local food and daily comfort."},
      {"time": "8:00 AM", "title": "Warm Family Greeting", "emoji": "\ud83e\udd17", "instruction": "Greet family with warmth and affection. Ask about their plans and offer encouragement.", "meaning": "Warm greetings can reinforce family bonds and emotional security."},
      {"time": "8:30 AM", "title": "Read a Poem", "emoji": "\ud83d\udcd6", "instruction": "Read one poem by Neruda, Mistral, or another Chilean poet. Carry its beauty with you.", "meaning": "Poetry can reflect the deep cultural appreciation for literature, beauty and emotional expression."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with concentration and determination. Chileans value persistence.", "meaning": "Dedicated effort can reflect the cultural value of perseverance and resilience."},
      {"time": "9:30 AM", "title": "Once \u2014 Tea Break", "emoji": "\ud83e\uded6", "instruction": "Have once \u2014 tea with bread, cake or cheese \u2014 with friends, family or colleagues.", "meaning": "Once can reflect the cultural tradition of afternoon social gathering and nourishment."},
      {"time": "10:00 AM", "title": "Help a Colleague or Friend", "emoji": "\ud83e\udd1d", "instruction": "Offer sincere help to someone at work, school, or in your community.", "meaning": "Helping others can reinforce solidarity, empathy and mutual support."},
      {"time": "10:30 AM", "title": "Learn About Chilean Nature", "emoji": "\ud83c\udf3f", "instruction": "Read about Chilean flora, fauna, or geography. Learn about a national park or ecosystem.", "meaning": "Nature learning can strengthen appreciation for the country's biodiversity and environmental heritage."},
      {"time": "11:00 AM", "title": "Shop for Fresh Food", "emoji": "\ud83e\udd6c", "instruction": "Visit a market or shop for fresh vegetables, bread, fish, or meat for lunch.", "meaning": "Fresh food shopping can reflect appreciation for quality ingredients and local produce."},
      {"time": "12:00 PM", "title": "Shared Lunch", "emoji": "\ud83c\udf72", "instruction": "Eat lunch with family or colleagues. Share conversation and enjoy the meal slowly.", "meaning": "Shared lunches can strengthen social bonds and reflect the value of communal dining."},
      {"time": "1:00 PM", "title": "Rest or Read", "emoji": "\ud83d\udcd6", "instruction": "Rest for 20-30 minutes or read a book. Recharge for the afternoon.", "meaning": "Afternoon rest can support mental clarity and balance."},
      {"time": "2:00 PM", "title": "Outdoor Activity", "emoji": "\ud83c\udf33", "instruction": "Walk, hike, or enjoy the outdoors. Chile's nature invites exploration.", "meaning": "Outdoor activity can reflect appreciation for nature, physical health and adventure."},
      {"time": "3:00 PM", "title": "Write or Create", "emoji": "\u270d\ufe0f", "instruction": "Write a short poem, journal entry, or create something artistic. Express your feelings.", "meaning": "Creative expression can reflect the cultural value of poetry, art and emotional honesty."},
      {"time": "4:00 PM", "title": "Visit Friends or Family", "emoji": "\ud83c\udfe0", "instruction": "Visit a friend or relative. Bring something small to share and enjoy their company.", "meaning": "Spontaneous visits can reinforce social bonds and the value of personal presence."},
      {"time": "5:30 PM", "title": "Prepare Asado or Dinner", "emoji": "\ud83d\udd25", "instruction": "Help prepare asado, pebre, or another Chilean dish with family.", "meaning": "Cooking together can reinforce family cooperation and cultural tradition."},
      {"time": "7:00 PM", "title": "Family Dinner and Conversation", "emoji": "\ud83c\udf77", "instruction": "Eat dinner with family. Discuss literature, politics, or family stories passionately.", "meaning": "Family meals with passionate discussion can reinforce closeness and intellectual engagement."},
      {"time": "8:00 PM", "title": "Evening Walk or Stargazing", "emoji": "\ud83c\udf19", "instruction": "Take an evening walk or look at the stars. Chile has some of the clearest skies.", "meaning": "Evening nature observation can foster wonder, calm and appreciation for the cosmos."},
      {"time": "9:30 PM", "title": "Reflect on Resilience", "emoji": "\ud83d\udcad", "instruction": "Think about one challenge you overcame today and one thing that brought you joy.", "meaning": "Reflection can build resilience, gratitude and awareness of inner strength."},
    ]
  },
  /* ===== AUSTRALIA ===== */
  {
    id: "australia",
    name: "Australia",
    flag: "\ud83c\udde6\ud83c\uddfa",
    background: "Australian culture often values outdoor activity, casual social interaction, multicultural inclusion, and a relaxed approach to daily life. In many contexts, fairness, humour, and connection to nature shape how people interact with others.",
    focus: "Outdoor activity, casual social interaction, multicultural inclusion and fairness.",
    identity: "Australian daily habits can shape identity through openness, humour, environmental connection and respect for diversity.",
    tasks: [
      {"time": "6:00 AM", "title": "Sunrise and Fresh Air", "emoji": "\ud83c\udf05", "instruction": "Step outside at sunrise or early morning. Breathe deeply and notice the sounds of nature.", "meaning": "Morning fresh air can reflect appreciation for nature and an active start to the day."},
      {"time": "6:30 AM", "title": "Morning Surf, Swim or Walk", "emoji": "\ud83c\udfc4", "instruction": "Go for a surf, swim, jog, or walk outside. Enjoy the outdoors whatever the weather.", "meaning": "Morning outdoor activity can reflect the cultural value of connecting with nature daily."},
      {"time": "7:00 AM", "title": "Shower and Dress Casually", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress in casual, comfortable clothes. Keep it practical and relaxed.", "meaning": "Casual dress can reflect the cultural value of informality, comfort and authenticity."},
      {"time": "7:30 AM", "title": "Outdoor Breakfast", "emoji": "\ud83c\udf73", "instruction": "Eat breakfast outside on a patio, balcony or near a window. Watch birds or clouds.", "meaning": "Eating outdoors can reflect appreciation for nature and the environment."},
      {"time": "8:00 AM", "title": "Casual Friendly Greeting", "emoji": "\ud83d\udc4b", "instruction": "Greet someone with a casual, friendly word or gesture. Keep it light and genuine.", "meaning": "Casual friendliness may create an inclusive, relaxed atmosphere where everyone feels welcome."},
      {"time": "8:30 AM", "title": "Check on a Mate", "emoji": "\ud83e\udd1d", "instruction": "Message, call or speak to a friend to ask how they are doing. Use a friendly nickname.", "meaning": "Checking on friends can reinforce mateship and the value of looking out for one another."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with focus. Australians value getting things done so you can enjoy life.", "meaning": "Efficient work can reflect the cultural balance between productivity and leisure."},
      {"time": "9:30 AM", "title": "Coffee Break", "emoji": "\u2615", "instruction": "Grab a flat white or coffee with colleagues. Talk about sports, weekend plans or life.", "meaning": "Coffee culture can build social bonds and reflect the importance of casual connection."},
      {"time": "10:00 AM", "title": "Fair Go for Someone", "emoji": "\u2696\ufe0f", "instruction": "Stand up for fairness today. Include someone who seems left out or challenge unfairness.", "meaning": "Standing up for fairness can reflect the cultural value of a 'fair go' for everyone."},
      {"time": "10:30 AM", "title": "Learn About Indigenous Culture", "emoji": "\ud83e\ude83", "instruction": "Read or watch something about Aboriginal or Torres Strait Islander culture or history.", "meaning": "Learning about Indigenous culture can build respect and appreciation for First Nations."},
      {"time": "11:00 AM", "title": "Prepare for BBQ or Lunch", "emoji": "\ud83e\udd69", "instruction": "Prepare simple, fresh ingredients for lunch or a BBQ. Keep it uncomplicated.", "meaning": "Simple food preparation can reflect the casual, no-fuss approach to daily meals."},
      {"time": "12:00 PM", "title": "Outdoor Lunch", "emoji": "\ud83e\udd6a", "instruction": "Eat lunch outside in a park, courtyard or sunny spot. Leave your phone in your bag.", "meaning": "Eating outdoors can reflect appreciation for sunshine, nature and open spaces."},
      {"time": "1:00 PM", "title": "Short Walk or Sport", "emoji": "\ud83c\udfc3", "instruction": "Go for a walk, kick a football, or play a quick game with friends during the break.", "meaning": "Active breaks can encourage physical health and community play."},
      {"time": "2:00 PM", "title": "Back to Work with Humour", "emoji": "\ud83d\ude04", "instruction": "Return to work. Use humour to lighten the mood if stress builds.", "meaning": "Humour can reflect resilience, social skill and the cultural art of not taking things too seriously."},
      {"time": "3:00 PM", "title": "Afternoon Snack", "emoji": "\ud83c\udf6a", "instruction": "Have a small snack and chat with a colleague or friend. Keep it relaxed.", "meaning": "Afternoon socialising can maintain relationships and break up the workday."},
      {"time": "4:00 PM", "title": "Nature Walk or Beach Visit", "emoji": "\ud83c\udf0a", "instruction": "If possible, visit a beach, park, or bushland. Observe the native landscape.", "meaning": "Nature time can deepen environmental connection and appreciation for the land."},
      {"time": "5:30 PM", "title": "BBQ or Simple Dinner", "emoji": "\ud83c\udf56", "instruction": "Cook or eat a simple shared meal with family or friends. Keep it relaxed.", "meaning": "Shared casual meals can reinforce social bonds and community spirit."},
      {"time": "7:00 PM", "title": "Family Walk or Sport", "emoji": "\ud83c\udfc9", "instruction": "Take a family walk, play cricket, or watch footy together.", "meaning": "Evening family activity can strengthen bonds and encourage physical health."},
      {"time": "8:00 PM", "title": "Relax with Family", "emoji": "\ud83d\udcfa", "instruction": "Watch TV, play games, or simply relax with family. Enjoy the laid-back evening.", "meaning": "Evening relaxation can reflect the value of balance, family and personal time."},
      {"time": "9:30 PM", "title": "Reflect on Fairness", "emoji": "\ud83e\udd14", "instruction": "Think about one way you included someone today or stood up for fairness.", "meaning": "Reflecting on fairness can strengthen moral identity and commitment to equality."},
    ]
  },
  /* ===== NEW ZEALAND ===== */
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "\ud83c\uddf3\ud83c\uddff",
    background: "New Zealand culture often values connection to the land, Maori traditions, outdoor adventure, and community spirit. In many contexts, kaitiakitanga (guardianship of nature), fairness, and humility shape daily life.",
    focus: "Connection to land, Maori traditions, outdoor adventure, community and guardianship.",
    identity: "New Zealand daily habits can shape identity through environmental stewardship, respect for indigenous culture, humility and community care.",
    tasks: [
      {"time": "6:00 AM", "title": "Greet the Dawn", "emoji": "\ud83c\udf05", "instruction": "Step outside at dawn. Breathe deeply and acknowledge the new day with gratitude.", "meaning": "Morning gratitude can reflect connection to the land and appreciation for each new day."},
      {"time": "6:30 AM", "title": "Morning Walk or Run", "emoji": "\ud83c\udfc3", "instruction": "Walk, run, or exercise outdoors. Many New Zealanders start the day with nature.", "meaning": "Morning outdoor activity can reflect the cultural value of connecting with the natural world."},
      {"time": "7:00 AM", "title": "Shower and Dress Practically", "emoji": "\ud83e\uddfc", "instruction": "Shower and dress in practical, comfortable clothes suitable for changing weather.", "meaning": "Practical dressing can reflect adaptability, humility and readiness for outdoor life."},
      {"time": "7:30 AM", "title": "Hearty Breakfast", "emoji": "\ud83e\udd63", "instruction": "Eat a filling breakfast: eggs, toast, porridge, or fruit. Fuel up for an active day.", "meaning": "A hearty breakfast can reflect the value of nourishment and preparing for outdoor activity."},
      {"time": "8:00 AM", "title": "Warm Greeting", "emoji": "\ud83d\udc4b", "instruction": "Greet family, friends or colleagues with a warm, genuine word or smile.", "meaning": "Warm greetings can create an inclusive, friendly atmosphere and strengthen social bonds."},
      {"time": "8:30 AM", "title": "Learn a Maori Word", "emoji": "\ud83d\udde3\ufe0f", "instruction": "Learn one Maori word or phrase today. Use it in conversation if appropriate.", "meaning": "Language learning can build respect for Maori culture and strengthen bicultural understanding."},
      {"time": "9:00 AM", "title": "Focused Work or Study", "emoji": "\ud83d\udcda", "instruction": "Work or study with concentration. Approach tasks with humility and a willingness to learn.", "meaning": "Dedicated effort can reflect the value of hard work, humility and continuous improvement."},
      {"time": "9:30 AM", "title": "Coffee with Colleagues", "emoji": "\u2615", "instruction": "Have a flat white or tea with colleagues. Talk about weekend plans, sports or nature.", "meaning": "Casual coffee chats can build relationships and reflect the importance of social connection."},
      {"time": "10:00 AM", "title": "Environmental Action", "emoji": "\ud83c\udf3f", "instruction": "Pick up litter, recycle properly, or make one environmentally conscious choice today.", "meaning": "Environmental care can reflect kaitiakitanga \u2014 guardianship of the land for future generations."},
      {"time": "10:30 AM", "title": "Help a Mate", "emoji": "\ud83e\udd1d", "instruction": "Offer help to a friend, colleague or neighbour. Check if they need support with anything.", "meaning": "Helping others can reinforce community spirit, empathy and the value of mutual care."},
      {"time": "11:00 AM", "title": "Prepare Fresh Lunch", "emoji": "\ud83e\udd6a", "instruction": "Make a simple, fresh lunch with local ingredients. Keep it healthy and uncomplicated.", "meaning": "Fresh, simple food can reflect appreciation for local produce and healthy living."},
      {"time": "12:00 PM", "title": "Lunch Outside", "emoji": "\ud83c\udf33", "instruction": "Eat lunch outside in a park, garden or near water. Enjoy the natural surroundings.", "meaning": "Eating outdoors can reflect appreciation for nature and the clean, green environment."},
      {"time": "1:00 PM", "title": "Short Walk or Rest", "emoji": "\ud83d\udeb6", "instruction": "Take a walk or rest quietly. Recharge for the afternoon.", "meaning": "Afternoon rest can support mental clarity and balance in an active day."},
      {"time": "2:00 PM", "title": "Focused Afternoon Work", "emoji": "\u270f\ufe0f", "instruction": "Return to work with focus. Collaborate openly and share ideas with others.", "meaning": "Collaboration can reflect the value of teamwork, equality and shared success."},
      {"time": "3:00 PM", "title": "Outdoor Break", "emoji": "\ud83c\udfd4\ufe0f", "instruction": "Step outside for fresh air. Look at the mountains, sea, or sky if you can.", "meaning": "Nature observation can restore energy and deepen appreciation for the landscape."},
      {"time": "4:00 PM", "title": "Learn About Maori Culture", "emoji": "\ud83e\udeb6", "instruction": "Read or watch something about Maori history, art, or traditions. Deepen your understanding.", "meaning": "Cultural learning can build respect for indigenous heritage and strengthen national identity."},
      {"time": "5:30 PM", "title": "Cook a Simple Dinner", "emoji": "\ud83c\udf72", "instruction": "Cook a simple, healthy dinner with fresh ingredients. Share with family or flatmates.", "meaning": "Home cooking can reflect self-sufficiency, health consciousness and shared domestic life."},
      {"time": "7:00 PM", "title": "Family Time or Hobby", "emoji": "\ud83c\udfa3", "instruction": "Spend time with family, go fishing, garden, or pursue an outdoor hobby.", "meaning": "Evening family and outdoor time can strengthen bonds and connection to nature."},
      {"time": "8:00 PM", "title": "Relax and Unwind", "emoji": "\ud83c\udf19", "instruction": "Relax at home, watch a show, read, or chat with friends. Keep it laid-back.", "meaning": "Evening relaxation can reflect the value of balance, rest and personal time."},
      {"time": "9:30 PM", "title": "Reflect on Stewardship", "emoji": "\ud83d\udcad", "instruction": "Think about one way you cared for the environment or community today.", "meaning": "Reflection on stewardship can strengthen environmental consciousness and commitment to kaitiakitanga."},
    ]
  }
];
/* ========== Achievement Definitions ========== */
const achievementDefs = [
  { id: 'first_draw', icon: '🌍', title: 'First Draw', desc: 'Draw your first country' },
  { id: 'task_master', icon: '✅', title: 'Task Master', desc: 'Complete all tasks for one country' },
  { id: 'explorer', icon: '🔄', title: 'Explorer', desc: 'Draw 10 different countries' },
  { id: 'globetrotter', icon: '🌐', title: 'Globetrotter', desc: 'Draw 20 different countries' },
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
let isRestoringState = false;
let miniAnimationId = null;

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
  if (miniAnimationId) return;
  function loop() {
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
      miniAnimationId = requestAnimationFrame(loop);
    } else {
      miniAnimationId = null;
    }
  }
  miniAnimationId = requestAnimationFrame(loop);
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
  if (uniqueCount >= 10) unlockAchievement('explorer');
  if (uniqueCount >= 20) unlockAchievement('globetrotter');
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
    if (!isRestoringState) {
      celebration.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      launchConfetti();
      sfxCelebrate();
      showToast('🎉 All tasks completed! Amazing work!', 'success');
    }
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
    isRestoringState = true;
    updateProgress();
    isRestoringState = false;
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
    const sv = parseFloat(savedSfxVol);
    if (!isNaN(sv)) {
      sfxVolume = sv / 100;
      document.getElementById('sfxVolume').value = sv;
      document.getElementById('sfxVolumeValue').textContent = sv + '%';
    }
  }
  const savedBgmVol = localStorage.getItem('bgmVolume');
  if (savedBgmVol !== null) {
    const bv = parseFloat(savedBgmVol);
    if (!isNaN(bv)) {
      bgmVolume = bv / 100;
      document.getElementById('bgmVolume').value = bv;
      document.getElementById('bgmVolumeValue').textContent = bv + '%';
    }
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
  setTimeout(loadState, 2000);
});
