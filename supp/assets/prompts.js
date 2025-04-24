const prompts = {
    'blackswan': {
      'easy': 'A black swan swimming in a river',
      'medium': 'A duck with a tophat swimming in a river',
      'hard': 'A paper boat floating in a bathtub',
      'frame_range': '[0, 48, 2]'
    },
    'car-turn': {
      'easy': 'A gray car with black tires driving on a road in a forest',
      'medium': 'A man with a black top running on a road in a forest, camera shot from a distance',
      'hard': 'Black suv with tinted windows driving through a roundabout in a bustling city, surrounded by tall buildings and bright lights',
      'frame_range': '[0, 72, 3]'
    },
    'car-roundabout': {
      'easy': 'A gray mini cooper driving around a roundabout in a town',
      'medium': 'A man riding a unicycle around a roundabout in a town',
      'hard': 'A lion walking through a bustling roundabout, surrounded by vibrant city life',
      'frame_range': '[0, 72, 3]'
    },
    'libby': {
      'easy': 'Dog running in a garden',
      'medium': 'Bear running in a garden',
      'hard': 'Plane flying through the sky above the clouds',
      'frame_range': '[0, 24, 1]'
    },
    'bus': {
      'easy': 'Aerial view of bus driving on a street',
      'medium': 'Aerial view of red ferrari driving on a street',
      'hard': 'Closeup aerial view of an ant crawling in a desert',
      'frame_range': '[0, 72, 3]'
    },
    'camel': {
      'easy': 'A camel walking in a zoo',
      'medium': 'A giraffe walking in a zoo',
      'hard': 'A blue Sedan car turning into a driveway',
      'frame_range': '[0, 72, 3]'
    },
    'bear': {
      'easy': 'A bear walking on the rocks',
      'medium': 'A giraffe walking on the rocks',
      'hard': 'A giraffe walking in the zoo',
      'frame_range': '[0, 72, 3]'
    },
    'bmx-bumps': {
      'easy': 'BMX rider biking up a sandy hill',
      'medium': 'Black Jeep driving up a sandy hill',
      'hard': 'Black Jeep driving up a hill in a bustling city',
      'frame_range': '[0, 24, 1]'
    },
    'bmx-trees': {
      'easy': 'Kid with white shirt riding a bike up a hill, seen from afar, long-distance view',
      'medium': 'Leopard running up a grassy hill',
      'hard': 'Leopard running up a snowy hill in a forest',
      'frame_range': '[0, 24, 1]'
    },
    'boat': {
      'easy': 'Fishing boat sails through the sea in front of an island, close-up, medium shot, elevated camera angle, wide angle view',
      'medium': 'Black yacht sails through the sea in front of an island',
      'hard': 'Black yacht sails through the sea in front of a bustling city',
      'frame_range': '[0, 72, 3]'
    },
    'car-shadow': {
      'easy': 'White fiat driving on a street surrounded by buildings',
      'medium': 'Cardboard box with wheels driving on a street surrounded by buildings',
      'hard': 'Cardboard box with wheels driving through a minefield in a warzone',
      'frame_range': '[0, 24, 1]'
    },
    'carousel': {
      'easy': 'Carousel spinning in a playground',
      'medium': 'Kid running around in a circle in a playground',
      'hard': 'Race car drifting in circles in a parking lot',
      'frame_range': '[0, 24, 1]'
    },
    'classic-car': {
      'easy': 'Classic long black car driving on a road in front of a crowd',
      'medium': 'Limousine driving on a road in front of a crowd',
      'hard': 'Limousine driving on a snowy road in the Alps',
      'frame_range': '[0, 24, 1]'
    },
    'dance-twirl': {
      'easy': 'Woman twirling in a dance with arms swinging on in front of a crowd',
      'medium': 'Monkey twirling in a dance with arms swinging in front of a crowd',
      'hard': 'Monkey twirling in a dance with arms swinging in a jungle',
      'frame_range': '[0, 72, 3]'
    },
    'dog': {
      'easy': 'Golden retriever walking around in the grass',
      'medium': 'Bear walking around in the grass',
      'hard': 'Bear walking around in a city street',
      'frame_range': '[0, 48, 2]'
    },
    'flamingo': {
      'easy': 'Flamingo drinking water in a pond',
      'medium': 'A goose walking in a puddle',
      'hard': 'A swan drinking water from a puddle',
      'frame_range': '[0, 24, 1]'
    },
    'goat': {
      'easy': 'Goat walking over rocks on a mountain',
      'medium': 'Jaguar walking over rocks on a mountain',
      'hard': 'Jaguar walking in a snowy forest',
      'frame_range': '[0, 72, 3]'
    },
    'horsejump-high': {
      'easy': 'Horse jumping over a high fence, medium distance shot',
      'medium': 'Man jumping over a high fence, medium distance shot',
      'hard': 'Jaguar jumping over a large rock',
      'frame_range': '[0, 48, 2]'
    },
    'longboard': {
      'easy': 'Man longboarding past a forest, camera following behind',
      'medium': 'Man snowboarding down a passage in a snowy forest, camera following behind',
      'hard': 'Woman surfing through a tunnel',
      'frame_range': '[0, 48, 2]'
    },
    'motocross-bumps': {
      'easy': 'BMX biker jumps over a hill on mountain bike',
      'medium': 'Offroad car jumping over a hill',
      'hard': 'Woman on water slide goes up and down, in the air, aerial view',
      'frame_range': '[0, 24, 1]'
    },
    'motocross-jump': {
      'easy': 'BMX biker jumps over a hill on mountain bike, closeup shot, passes in front of camera',
      'medium': 'Offroad car jumping over a ramp, closeup shot, passes in front of camera',
      'hard': 'Dolphin jumping out of the ocean in front of the camera, closeup shot',
      'frame_range': '[0, 24, 1]'
    },
    'mtb-race': {
      'easy': 'Mountain biking down a trail path in the forest, first person view',
      'medium': 'Running through a forest, first person view',
      'hard': 'Driving motorcycle through cityscape, first person perspective',
      'frame_range': '[0, 48, 2]'
    },
    'chamaleon': {
      'easy': 'Chameleon climbing a branch in a forest',
      'medium': 'Lizard climbing a branch in a forest',
      'hard': 'Lizard climbing a branch in a snowy forest',
      'frame_range': '[0, 72, 3]'
    },
    'cows': {
      'easy': 'Cow walking in a grassy field',
      'medium': 'Bear walking in a grassy field',
      'hard': 'Polar bear walking in a zoo',
      'frame_range': '[0, 94, 4]'
    },
    'crossing': {
      'easy': 'A man and woman walking over a zebra crossing',
      'medium': 'A pair of zebras walking over a zebra crossing',
      'hard': 'A pair of zebras walking in the savannah',
      'frame_range': '[0, 48, 2]'
    },
    'dance-jump': {
      'easy': 'Woman in pink dress dancing, spin jump, in town square',
      'medium': 'Man in suit dancing, spin jump, in town square',
      'hard': 'Man in suit dancing, spin jump, in a ballroom',
      'frame_range': '[0, 24, 1]'
    },
    'deer': {
      'easy': 'Two deers locking antlers in a snowy forest',
      'medium': 'Polar bears butting heads in a snowy forest',
      'hard': 'Polar bears butting heads in the desert',
      'frame_range': '[0, 72, 3]'
    },
    'dog-agility': {
      'easy': 'Dog running between poles in an agility course',
      'medium': 'Cat running between poles in an agility course',
      'hard': 'Mouse running between chair legs on a wooden floor',
      'frame_range': '[0, 24, 1]'
    },
    'dog-gooses': {
      'easy': 'Dog chasing geese in a park',
      'medium': 'Lion chasing geese in a park',
      'hard': 'Shark chasing fish in the ocean',
      'frame_range': '[0, 72, 3]'
    },
    'dogs-jump': {
      'easy': 'Dog jumping in a grassy field',
      'medium': 'Wolf jumping in a grassy field',
      'hard': 'Goat jumping between rocks in a rocky canyon with steep cliffs',
      'frame_range': '[0, 24, 1]'
    },
    'drift-chicane': {
      'easy': 'Race car drifting on a chicane race track',
      'medium': 'Mario kart drifting on a chicane race track',
      'hard': 'Mario kart drifting on a twisting rainbow road',
      'frame_range': '[0, 48, 2]'
    },
    'drift-straight': {
      'easy': 'Race car drifting on a race track',
      'medium': 'Mario kart drifting on a race track',
      'hard': 'Mario kart drifting on a rainbow road',
      'frame_range': '[0, 24, 1]'
    },
    'drift-turn': {
      'easy': 'Race car drifting on a race track',
      'medium': 'Mario kart drifting on a race track',
      'hard': 'Mario kart drifting on a rainbow road',
      'frame_range': '[0, 24, 1]'
    },
    'elephant': {
      'easy': 'Elephant walking in a zoo',
      'medium': 'Mammoth walking in a zoo',
      'hard': 'Mammoth walking on a snowy mountain',
      'frame_range': '[0, 72, 3]'
    },
    'giant-slalom': {
      'easy': 'Slalom race skier skiing down a snowy slope, camera looking uphill',
      'medium': 'Snowboarder going down a snowy slope, camera looking uphill',
      'hard': 'Snowboarder going down a sand dune, camer looking uphill',
      'frame_range': '[100, 124, 1]'
    },
    'gold-fish': {
      'easy': 'Many goldfish swimming in a fish tank',
      'medium': 'Sharks swimming in a fish tank',
      'hard': 'Sharks and dolphins swimming in the ocean',
      'frame_range': '[0, 72, 3]'
    },
    'hoverboard': {
      'easy': 'Man on hoverboard riding down a street past the camera',
      'medium': 'Robot with wheels riding down a street past the camera',
      'hard': 'Robot with wheels riding down a street past the camera, in a bustling city',
      'frame_range': '[0, 72, 3]'
    },
    'judo': {
      'easy': 'In a judo match, a man takes down their opponent onto the floor in a dojo',
      'medium': 'In a judo match, a man in a black suit takes down their opponent onto the floor in a dojo',
      'hard': 'In a judo match, a monkey takes down another monkey onto the ground in the jungle',
      'frame_range': '[8, 32, 1]'
    },
    'kite-surf': {
      'easy': 'Kite surfer is pulled in the ocean',
      'medium': 'Surfer on a wave in the ocean',
      'hard': 'Snowboarder gliding along a snowy slope',
      'frame_range': '[0, 48, 2]'
    },
    'lab-coat': {
      'easy': 'Zoom into girls wearing lab coats on a field',
      'medium': 'Zoom into a gorilla wearing a lab coat on a field',
      'hard': 'Zoom into a lion standing on a cliff looking towards us',
      'frame_range': '[0, 24, 1]'
    },
    'lucia': {
      'easy': 'Woman walking towards a bench in a park',
      'medium': 'Robot walking towards a bench in a park',
      'hard': 'Robot walking on a sidewalk in a cyberpunk-style city',
      'frame_range': '[0, 48, 2]'
    },
    'mbike-trick': {
      'easy': 'Motorcyclist riding out of smoke on a road',
      'medium': 'Ferrari driving out of smoke on a road',
      'hard': 'Leopard emerging from the darkness in a jungle',
      'frame_range': '[0, 72, 3]'
    },
    'motorbike': {
      'easy': 'Motorcyclist riding past on a road with a forest behind, side view',
      'medium': 'Man running past on a road with a forest behind, side view',
      'hard': 'Cheetah running quickly in the savannah, side view',
      'frame_range': '[0, 48, 2]'
    },
    'paragliding': {
      'easy': 'Paraglider flying over a mountain, aerial view from above',
      'medium': 'Parachuting over a mountain, aerial view from above',
      'hard': 'Parachuting over a city, aerial view from above',
      'frame_range': '[0, 48, 2]'
    },
    'parkour': {
      'easy': 'Parkour runner vaulting over walls in a neighbourhood, side view',
      'medium': 'Monkey running and jumping over walls in a neighbourhood, side view',
      'hard': 'Monkey running and jumping over bushes in the jungle, side view',
      'frame_range': '[0, 24, 1]'
    },
    'rallye': {
      'easy': 'Rally car driving towards us on a dirt road, low angle shot, driving past camera',
      'medium': 'Lambourghini driving towards us on a road at night, low angle shot, driving past camera',
      'hard': 'Skateboard rolling down road towards us, close-up, low angle shot, rolling past camera',
      'frame_range': '[0, 48, 2]'
    },
    'rollerblade': {
      'easy': 'Rollerblader doing a jump trick on a road, side view, static camera',
      'medium': 'Man doing a long jump on a road, side view, static camera',
      'hard': 'Biker riding past and doing a jump trick in the air, side view, static camera',
      'frame_range': '[10, 34, 1]'
    },
    'tennis': {
      'easy': 'Tennis player hitting the ball with a tennis racket on a court with a forehand shot',
      'medium': 'Robot tennis player hitting the ball with a tennis racket on a court with a forehand shot',
      'hard': 'Robot tennis player hitting the ball with a tennis racket on a court with a forehand shot, in a space station',
      'frame_range': '[0, 48, 2]'
    },
    'swing': {
      'easy': 'Kid swinging on a swing in a playground',
      'medium': 'Monkey swinging on a swing in a playground',
      'hard': 'Monkey swinging on a swing in a jungle',
      'frame_range': '[0, 48, 2]'
    },
    'train': {
      'easy': 'Toy steam train turning on rail tracks, close-up shot from above',
      'medium': 'Steam train taking big turn in a forest, far away aerial drone shot',
      'hard': 'Long snake slithering through grass, close-up shot from above',
      'frame_range': '[0, 72, 3]'
    }
  };