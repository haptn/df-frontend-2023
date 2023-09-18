const topics = {
  FICT: 'Fiction',
  NOFI: 'Nonfiction',
  TECH: 'Technology',
}

const defaultListBooks = [
  {
    id: 1,
    name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    image: 'https://m.media-amazon.com/images/I/41UV9-Exb0L._SY445_SX342_.jpg',
    topic: topics.TECH,
    isbn: '978-0132350884',
    description: `Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.

    Noted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers, has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of software craftsman, and make you a better programmer―but only if you work at it.
    
    What kind of work will you be doing? You’ll be reading code―lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly you will be challenged to reassess your professional values and your commitment to your craft.
    
    Clean Codeis divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code―of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.
    
    Readers will come away from this book understanding:
     • How to tell the difference between good and bad code
     • How to write good code and how to transform bad code into good code
     • How to create good names, good functions, good objects, and good classes
     • How to format code for maximum readability
     • How to implement complete error handling without obscuring code logic
     • How to unit test and practice test-driven development
     • What “smells” and heuristics can help you identify bad code
    
    This book is a must for any developer, software engineer, project manager, team lead, or systems analyst with an interest in producing better code.
    `,
  },
  {
    id: 2,
    name: 'Cracking the Coding Interview: 189 Programming Questions and Solutions',
    author: 'Gayle Laakmann McDowell',
    image: 'https://m.media-amazon.com/images/I/61mIq2iJUXL._SY466_.jpg',
    topic: topics.TECH,
    isbn: '978-0984782857',
    description: `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.

    Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
    
    Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
    
    These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible. WHAT'S INSIDE?
    
     • 189 programming interview questions, ranging from the basics to the trickiest algorithm problems.
     • A walk-through of how to derive each solution, so that you can learn how to get there yourself.
     • Hints on how to solve each of the 189 questions, just like what you would get in a real interview.
     • Five proven strategies to tackle algorithm questions, so that you can solve questions you haven't seen.
     • Extensive coverage of essential topics, such as big O time, data structures, and core algorithms.
     • A behind the scenes look at how top companies like Google and Facebook hire developers.
     • Techniques to prepare for and ace the soft side of the interview: behavioral questions.
     • For interviewers and companies: details on what makes a good interview question and hiring process.
    
    Illustrations noteIllustrations: Illustrations, black and white
    `,
  },
  {
    id: 3,
    name: `Hans Christian Andersen's Complete Fairy Tales (Leather-bound Classics)`,
    author: 'Hans Christian Andersen',
    image: 'https://m.media-amazon.com/images/I/81KTcQ63RML._SY466_.jpg',
    topic: topics.FICT,
    isbn: '978-1626860995',
    description: `Classic tales of fairies and princesses, ducklings and dancing shoes from the master storyteller Hans Christian Andersen.

    All the best-loved fairy tales of Hans Christian Andersen, including “The Ugly Duckling,” “Thumbelina,” “The Red Shoes,” “The Princess on the Pea,” and “The Emperor’s New Clothes,” fill the pages of this beautiful leather-bound collector’s edition. Also included is “The Tallow Candle”—one of the earliest stories written by Andersen, just discovered recently! A great book of bedtime stories or for rainy day reading, as there are both short and long anecdotes included. The attached bookmark ribbon ensures you’ll never lose your place as you wander through the imagination of one of the most popular children’s writers of all time. Curl up with this collection of classics and lose yourself in childhood memories.
    `,
  },
  {
    id: 4,
    name: 'Harry Potter and the Sorcerer’s Stone',
    image: 'https://m.media-amazon.com/images/I/A1dVsQWxWKL._SY466_.jpg',
    author: 'J.K. Rowling',
    topic: topics.FICT,
    isbn: '978-0545790352',
    description: `The beloved first book of the Harry Potter series, now fully illustrated by award-winning artist Jim Kay.
    For the first time, J.K. Rowling's beloved Harry Potter books will be presented in lavishly illustrated full-color editions. Award-winning artist Jim Kay has created over 100 stunning illustrations, making this deluxe format a perfect gift for a child being introduced to the series and for dedicated fans.Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility.All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years.But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry - and anyone who reads about him - will find unforgettable.
    `,
  },
  {
    id: 5,
    name: 'The Book of Joy: Lasting Happiness in a Changing World',
    author: 'His Holiness the Dalai Lama, Desmond Tutu, Douglas Carlton Abrams',
    image: 'https://m.media-amazon.com/images/I/51bBw1xnCyL._SY445_SX342_.jpg',
    topic: topics.NOFI,
    isbn: '978-0399185045',
    description: `Two spiritual giants. Five days. One timeless question.
 
    Nobel Peace Prize Laureates His Holiness the Dalai Lama and Archbishop Desmond Tutu have survived more than fifty years of exile and the soul-crushing violence of oppression. Despite their hardships—or, as they would say, because of them—they are two of the most joyful people on the planet.
    
    In April 2015, Archbishop Tutu traveled to the Dalai Lama's home in Dharamsala, India, to celebrate His Holiness's eightieth birthday and to create what they hoped would be a gift for others. They looked back on their long lives to answer a single burning question: How do we find joy in the face of life's inevitable suffering?
    
    They traded intimate stories, teased each other continually, and shared their spiritual practices. By the end of a week filled with laughter and punctuated with tears, these two global heroes had stared into the abyss and despair of our time and revealed how to live a life brimming with joy.
    
    This book offers us a rare opportunity to experience their astonishing and unprecendented week together, from the first embrace to the final good-bye.
    
    We get to listen as they explore the Nature of True Joy and confront each of the Obstacles of Joy—from fear, stress, and anger to grief, illness, and death. They then offer us the Eight Pillars of Joy, which provide the foundation for lasting happiness. Throughout, they include stories, wisdom, and science. Finally, they share their daily Joy Practices that anchor their own emotional and spiritual lives.
    
    The Archbishop has never claimed sainthood, and the Dalai Lama considers himself a simple monk. In this unique collaboration, they offer us the reflection of real lives filled with pain and turmoil in the midst of which they have been able to discover a level of peace, of courage, and of joy to which we can all aspire in our own lives.
    `,
  },
  {
    id: 6,
    name: 'The Art of Living: Peace and Freedom in the Here and Now',
    author: 'Thich Nhat Hanh',
    image: 'https://m.media-amazon.com/images/I/81WaEAXY64L._SY466_.jpg',
    topic: topics.NOFI,
    isbn: '978-0062434661',
    description: `In troubled times, there is an urgency to understand ourselves and our world. We have so many questions, and they tug at us night and day, consciously and unconsciously. In this important volume Zen Master Thich Nhat Hanh——one of the most revered spiritual leaders in the world today——reveals an art of living in mindfulness that helps us answer life’s deepest questions and experience the happiness and freedom we desire. 

    Thich Nhat Hanh presents, for the first time, seven transformative meditations that open up new perspectives on our lives, our relationships and our interconnectedness with the world around us. Based on the last full talks before his sudden hospitalization, and drawing on intimate examples from his own life, Thich Nhat Hanh shows us how these seven meditations can free us to live a happy, peaceful and active life, and face aging and dying with curiosity and joy and without fear.
    
    Containing the essence of the Buddha’s teachings and Thich Nhat Hanh’s poignant, timeless, and clarifying prose, The Art of Living provides a spiritual dimension to our lives. This is not an effort to escape life or to dwell in a place of bliss outside of this world. Instead, this path will allow us to discover where we come from and where we are going. And most of all, it will generate happiness, understanding, and love, so we can live deeply in each moment of our life, right where we are.
    `,
  },
  {
    id: 7,
    name: 'A Quick History of Math: From Counting Cavemen to Computers',
    author: 'Clive Gifford (Author), Michael Young (Illustrator)',
    image: 'https://m.media-amazon.com/images/I/519KKdTX7dL._SY445_SX342_.jpg',
    topic: topics.NOFI,
    isbn: '978-0711249035',
    description: `Math + history + jokes - boring bits = A Quick History of Math. This book begins around 43,000 years ago with a notched baboon leg, the Lebombo bone (the very first mathematical object in the world) and rushes us past Hindu numerals and the invention of zero, via Pythagoras, Pascal and probability, right up to the present day, with big data and the maths that rules our digital lives. Geometri-cool!

    You will discover:
     • How to count on your fingers (there are more ways than you might think!)
     • Why we have 60 seconds in a minute (hint: it’s to do with the ancient Babylonians)
     • How to count like an Egyptian (using hieroglyphs)
     • Why it’s hip to be square using square numbers
     • A Pythagorean party trick
     • The naked truth of Archimedes’ bath time mathematics
     • How to do matha-magic with magic squares
     • …and much more.

     In chronological order from pre-history to present day, this is the story of maths itself. It’s 43,000 years of human mathematical endeavor squeezed into one book for your reading pleasure. Illustrated with funny cartoons and packed with fascinating facts, you’ll be laughing and learning how to be a better mathematician.
    `,
  },
]

const allFields = Object.keys(defaultListBooks[0])