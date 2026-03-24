const consolesData = [
    {
        "title": "Magnavox Odyssey",
        "year": "1972",
        "quote": "“I always wanted to create something that had never been done before.” — Ralph H Baer",
        "tags": ["World First Console", "Single-Channel Graphics"],
        "specs": [
            ["CPU", "None (Discrete diode-transistor logic)"],
            ["GPU / Graphics", "None (Generates monochrome shapes on a black background)"],
            ["RAM", "None (No programmable memory)"],
            ["Storage", 'Flexible "game cards" (logic jumper circuits, not ROM)'],
            ["Display Output", "Monochrome TV on Channel 3/4 (60 Hz); built-in white shapes"],
            ["Controllers", 'Two wired units (rotary "paddle" knobs and a reset button)'],
            ["Media", "Printed cards and a set of plastic screen overlays"],
            ["Audio", "None (The system produces no sound)"],
            ["Power", "6 'C' batteries (≈9V)"],
            ["Date / Price", "1972 (USA), price $99.95"],
            ["Variants", "Original (required Magnavox TV for some bundles); later Odyssey 100/200/300 (simplified dedicated models)"]
        ],
        "overview": `The Odyssey relied exclusively on discrete logic without a microprocessor. It rendered the simplest geometric shapes (dots and lines) on the screen, creating the illusion of a game through electronic switching. Its defining characteristics were the total absence of sound and color—displaying only bright white objects against a black background.<br><br><b>Strengths:</b> Simple construction, "plug-and-play" accessibility, an entirely original concept, and the distinction of being the world's first home television gaming system. This device became the first commercial game console and quickly inspired the rise of arcade machines and competitors.`,
        "games": [
            ["Table Tennis (1972, built-in)", 'Simulates table tennis with two "paddles" and a ball. This was the first real-time multiplayer game on a TV; it utilized a flickering ball and a screen overlay to emphasize the physics of the bounce. Although the algorithms were simple (the ball had no "memory"), it was a revolution—the first arcade-style game on a home screen.'],
            ["Shooting Gallery (1973, with light gun)", 'The first video game featuring optical aiming. The light gun (equipped with an optical sensor) reacts to light emitted from the TV screen. The innovation allowed a player to "shoot" at an image on the television. This technology (photodiode and raster synchronization) later became the foundation for all light guns, such as the NES Zapper.'],
            ["Other built-in games", 'Haunted House, Analogic (a logic game), Ski, and others. The innovation of these games lay in the hybridization of video signals with physical overlays and manual rules (cards)—essentially a blend of video and board games. For example, Haunted House used a physical transparency of a spooky house, while the electronic "dots" on the screen represented the beam of a flashlight.']
        ],
        "impact": "The Magnavox Odyssey was the pioneer of the home console industry. Its success and the licensing of its technology set a massive legal precedent; the inventors (led by Ralph Baer) later became plaintiffs in several patent infringement lawsuits, most notably against Atari.<br><br>The primary effect of the Odyssey was market inspiration. Following its popular demonstration in 1972, the first arcade hits (like Pong) and competing home systems began to emerge. However, the hardware was limited by the technology of its time—monochrome graphics and primitive circuitry. Future developments, such as single-chip microcontrollers and ROM cartridges, soon made subsequent consoles significantly more powerful. Nevertheless, the Odyssey proved that the concept of home video gaming was viable, sparking the industry boom of the 1970s and 80s."
    },
    {
        "title": "Atari 2600",
        "year": "1977",
        "quote": "\"The day you launch a product, it's obsolete\"",
        "tags": ["Cartridges", "Microprocessor", "Joystick"],
        "specs": [
            ["CPU", "MOS Technology 6507 (a 6502 variant) @ 1.19 MHz"],
            ["GPU / Graphics", "Television Interface Adaptor (TIA) chip – generates sprites, 160×192 resolution, 128-color palette"],
            ["RAM", "128 bytes (located on the RIOT chip)"],
            ["Storage", "ROM Cartridges (typically 4 KB; later 8–32 KB via bank switching)"],
            ["Display Output", "COLOR (NTSC: 192×228 px, 128 colors; PAL: 240×...); RF signal to TV (Channel 2/3)"],
            ["Controllers", "2 ports: 8-way joystick (1 button) and potentiometers (\"paddles\")"],
            ["Media", "Cartridges (usually plastic ROM modules, 2–8 KB)"],
            ["Audio", "2-channel sound generator (integrated into TIA) – primitive tones and noise"],
            ["Power", "Power adapter ~9 V / 500 mA"],
            ["Date / Price", "Fall 1977: USA (~$199), later reduced to $99–199"],
            ["Variants", "Sears Tele-Games (branded version), Atari 2800 (Japan, 1983), game clones (Coleco Gemini, etc.)"]
        ],
        "overview": "The Atari 2600 (originally Video Computer System) was the first widely popular 8-bit home console. Its CPU, the MOS 6507 (a variant of the 6502), was designed specifically for video games. Graphics were generated by the TIA (Television Interface Adaptor) chip, capable of rendering up to 64 sprites (players, projectiles, background elements). It had only 128 bytes of RAM, so developers relied on various tricks—memory banking and heavy optimization (see “Pitfall!”). Key strengths included interchangeable game cartridges, color output, split-screen mode, and a variety of controllers (in addition to the joystick—two analog types). The system could produce sound (basic melodies/noise) and worked with a standard TV. The Atari 2600 became the standard of the “first generation” of consoles and created an entire ecosystem of games and developers.",
        "games": [
            ["Space Invaders (1978, arcade port)", "The first major arcade hit on a home console. On the Atari 2600 (developed by Rick Maurer), it became the first “hardware” license and triggered a surge in demand—selling around 1.25 million copies. Its gameplay (rows of aliens, multiple screens) demonstrated the potential for full-scale arcade-style action on a console. Although the graphics were simplified, the use of special memory banks in the cartridge allowed for more complex code (though the first true bank switching appeared in the Asteroids port in 1982). Space Invaders nearly doubled system sales upon release and established it as a dominant console."],
            ["Adventure (1980)", "The first action-adventure game featuring a maze, treasures, a dragon, and a hidden Easter egg, developed by Warren Robinett. It introduced the “arcade adventure” genre: players searched for keys and opened doors. Innovations included an unpredictable enemy AI, complex puzzles, and the first secret bonus (Easter egg) in console gaming. The use of a static maze screen with moving sprites showcased the capabilities of the TIA. Influence: it solidified the concept of adventure games on consoles."],
            ["Pitfall! (1982)", "A classic by Activision (David Crane)—running through the jungle, collecting treasures, jumping over snakes and alligators. It stood out for its precise animation timing and smooth object transitions using a pseudo-parallax scrolling effect (background shifting relative to player movement). Innovation: developers used clever tricks with the graphics chip to simulate horizontal scrolling without a dedicated video processor. Pitfall! became a brilliant example of how the limited Atari 2600 hardware could deliver a complex, multi-screen experience."],
            ["Other notable games", "Combat (1977, bundled) — a simple tank and airplane duel; Berzerk (1982, arcade port) — a robot-filled maze with speech (primitive synthesizer); Pac-Man (1982) — although criticized, this version became one of the best-selling titles and demonstrated demand for arcade games on consoles. The emergence of Activision (the first third-party game publisher for Atari) reshaped the market: new business models, developer branding, and licensing."]
        ],
        "impact": "The Atari 2600 solidified the concept of interchangeable cartridges and microprocessor-based consoles. Its success made Atari synonymous with “video game console” and launched the first golden age of video games (1977–1983). It introduced major franchises and inspired competitors like Intellivision and ColecoVision. At the same time, the overwhelming influx of low-quality games (including poor ports and clones) led to the video game crash of 1983. In terms of cultural impact, it was the first console to enter millions of homes, turning video games into a form of domestic entertainment. It also introduced the third-party developer model (Activision) and brought complex arcade experiences to consumer hardware. Conclusion: the Atari 2600 laid the foundation for genre diversity (action, shooter, racing, sports, adventure) alongside commercial practices like licensing and marketing, while its decline became a lesson in quality control and content management."
    },
    {
        "title": "Nintendo Entertainment System",
        "year": "1985",
        "quote": "“The Atari collapsed because they gave too much freedom...”",
        "tags": ["8Bit Revolution", "Super Mario", "Industry Recovery"],
        "specs": [
            ["CPU", "Ricoh 2A03 (based on the MOS 6502), 8-bit, 1.79 MHz (NTSC) (PAL version 1.66 MHz)"],
            ["GPU / Graphics", "Ricoh RP2C02 Picture Processing Unit (PPU); resolution up to 256×240, 52 colors, 64 sprites (8×16 or 8×8)"],
            ["RAM", "2 KB main RAM; 2 KB video memory; 256 bytes OAM (sprite buffer)"],
            ["Storage", "Cartridges (NES Game Pak) – typically 8 to 24 KB (MMC allowed expansion up to megabytes)"],
            ["Display Output", "Palette of up to 52 colors; TV output (monochrome in some PAL NES versions)"],
            ["Controllers", "Two ports: gamepad (D-pad, A, B, Start, Select buttons)"],
            ["Media", "Cartridges (program memory); additionally Famicom Disk System (Japan)"],
            ["Audio", "5-channel sound (2 pulse waves, triangle, noise, DPCM)"],
            ["Power", "Adapter ~9 V, 0.5–1 A"],
            ["Date / Price", "1983 (Japan, as Famicom), 1985 (USA), 1986 (EU); USA $179.99 (1986)"],
            ["Variants", "Famicom (Japan) – original with hardwired controllers; NES (NTSC), NES-101 Top Loader; disk system versions (Japan FDS); PAL versions"]
        ],
        "overview": "The Nintendo Entertainment System (NES) was a next-generation 8-bit console that revolutionized the market after the video game crash. Its CPU (Ricoh 2A03) integrated a MOS6502 core with an audio unit, running at ~1.79 MHz. Graphics were handled by the PPU with support for scrolling and tile-based rendering. The console produced a color image (up to 52 colors) with hardware sprite support and multi-channel sound. Key strengths included horizontal level scrolling, hardware processing of sprites and background layers, an integrated audio system, as well as reliable hardware design and strict quality control (tight licensing policies). Thanks to these technologies, the NES delivered smooth scrolling (unimaginable on the Atari 2600) and rich, “orchestral-like” soundtracks.",
        "games": [
            ["Super Mario Bros. (1985)", "An icon of platformers. The game showcased the full hardware capabilities: smooth horizontal scrolling (independent movement of character and background), detailed tile-based levels, and melodic audio (utilizing all five sound channels). The “1UP” mechanic added a new gameplay design element. Super Mario Bros. became a staple pack-in title and sold tens of millions of copies."],
            ["The Legend of Zelda (1986)", "The first major action RPG on a console. Its innovation was a large open world (Hyrule) with save functionality enabled by a battery inside the cartridge. This allowed for a long, non-linear experience with a dungeon system. Zelda pioneered battery-backed saves on consoles, setting the standard for long-form narrative gameplay."],
            ["Metroid (1986)", "An early non-linear exploration game. It introduced an “open-world” feel and included audiovisual state changes (e.g., movement differences underwater). It also combined platforming mechanics with a science fiction setting."],
            ["Duck Hunt (1984)", "A shooter using an optical sensor (Zapper) — it relied on a light-detection system interacting with CRT displays to register hits or misses. The player “shot” moving ducks on the screen. This was an early example of physical peripherals: the light gun."],
            ["Excitebike (1984)", "A motocross game with the ability to build custom tracks. Innovation: saving user-created tracks in additional memory (battery-backed), one of the first examples of storing user-generated content."]
        ],
        "impact": "The NES fully revived the video game market after the crash. Under the Nintendo brand, it effectively monopolized the American and Japanese markets by the late 1980s, establishing high quality standards (“Seal of Quality”). Its business model relied on strict licensing: third-party developers could release games only with Nintendo’s approval and within limits, which helped maintain quality (partly influenced by FTC-related agreements). The console laid the foundation for modern genres: platformers (Mario), action RPGs (Zelda), and accessory-based shooters (Duck Hunt). Iconic franchises (Mario, Zelda, Metroid) originated on the NES and built massive fanbases. Culturally, the NES defined the image of a “home gaming system” — a console under the TV with its own lineup of colorful games. Thanks to the NES, tens of millions of players returned to gaming, a new generation of gamers emerged, and a full-fledged gaming community began to form."
    },
    {
        "title": "Game Boy",
        "year": "1989",
        "quote": "\"Lateral thinking with withered technology\"",
        "tags": ["Tetris", "Portability", "Long Battery"],
        "specs": [
            ["CPU", "Sharp SM83 (a derivative of the Z80) @ 4.19 MHz"],
            ["GPU / Graphics", "LCD 160×144 pixels (4 shades of gray)"],
            ["RAM", "8 KB (4 KB VRAM + 4 KB system RAM)"],
            ["Storage", "Cartridges 256 KB – 4 MB (depending on the game)"],
            ["Display Output", "Monochrome LCD; support for “wrapped RGB” mode (Game Link monitors)"],
            ["Controllers", "D-pad + A, B, Start, Select (first handheld with a digital D-pad)"],
            ["Media", "Game Pak cartridges"],
            ["Audio", "Dual mono speakers (mono sound) or stereo via headphones, 4 sound channels (2 pulse, 1 triangle, noise)"],
            ["Power", "4 AA batteries (≈10–30 hours of gameplay)"],
            ["Date / Price", "April 1989 (Japan), July 1989 (USA); USA $89.95"],
            ["Variants", "Original (Game Boy), Pocket (smaller, monochrome), Light (JP only), Color (6.4M colors, 1998)"]
        ],
        "overview": "The Game Boy was the first truly mass-market handheld console. Its weak hardware (black-and-white 160×144 screen, 4 shades of gray) was offset by affordability and long battery life. It was based on an 8-bit processor similar to the NES. The built-in audio could produce simple melodies. A key feature was the Game Link port, allowing two consoles to connect (and even InfraRed support in the Color model). Another important component was cartridge memory, enabling save data through battery-backed storage. The system didn’t aim to be powerful, but it delivered unmatched portability and early networking capabilities (as early as 1989).",
        "games": [
            ["Tetris (1989)", "The Game Boy port from the USSR became iconic. A simple yet addictive puzzle game that perfectly demonstrated the strengths of portable gaming: short sessions and play on the go. Innovation: combining accessible gameplay with massive commercial success, laying the foundation for casual gaming on handhelds."],
            ["Pokémon Red/Green/Blue (1996–98)", "A global phenomenon that used the Link Cable to trade creatures between players, while the cartridge battery stored progress (save data). It became the first massively popular RPG series with a social/network element on a handheld, creating a Pokémon trading community. Gameplay (collecting and battling) directly integrated hardware features and social interaction."],
            ["Super Mario Land (1989)", "The first major Mario platformer for handhelds: it adapted level design and visuals to the Game Boy’s limitations (simplified but responsive sprite movement). Innovation: Mario in your pocket — compact game design and high-quality music emphasized portability."],
            ["The Legend of Zelda: Link's Awakening (1993)", "A large-scale portable adventure with a fully standalone story. It used battery saves and effectively adapted NES-style graphics to the Game Boy. It proved that handheld systems could handle deep, full-length adventure games."],
            ["Kirby’s Dream Land (1992)", "A light arcade platformer (a competitor to Mario in the genre) — one of the first games to feature repeated self-healing mechanics (inhaling objects), while also showcasing strong visual clarity on a monochrome screen."]
        ],
        "impact": "The Game Boy opened a new era: gaming on the go became normal. It outperformed competitors (Sega Game Gear, Atari Lynx) thanks to its lower price and superior battery life. Portable connectivity enabled the first social mobile gaming experiences (Pokémon) and communities built around content exchange. Players got a form factor that worked during travel, without needing a power outlet. Nintendo dominated the handheld market (until the rise of smartphones). The console gave birth to “mobile multiplayer” and short-session arcade gameplay (e.g., Tetris, puzzle games). Socially, the Game Boy made “gaming in transit” a common sight. From a business standpoint, it reinforced the model of bringing major franchises (Mario, Zelda, Pokémon) to handheld platforms. Bottom line: it created the portable gaming market, established standards like Game Link connectivity and save systems, expanded the audience (especially kids and teens), and pushed the industry toward multi-platform development."
    },
    {
        "title": "Sony PlayStation",
        "year": "1994",
        "quote": "“The name of the game is not market share, it's how fast we (Sony) can grow the industry”",
        "tags": ["CDROM", "3D Graphics", "DualShock", "FPS and JRPG"],
        "specs": [
            ["CPU", "Sony LSI CPU (MIPS R3000A-compatible), 32-bit RISC @ 33.8688 MHz"],
            ["GPU / Graphics", "Dedicated graphics chip (SPE, up to ~360,000 polygons per second)"],
            ["RAM", "2 MB main DRAM; 1 MB VRAM; 0.5 MB sound RAM"],
            ["Storage", "CD-ROM optical drive (up to 2× read speed)"],
            ["Display Output", "PAL/NTSC TV output; resolution up to 640×480 (NTSC) with 16.8 million colors"],
            ["Controllers", "2 ports: DualShock controller (later) with dual analog sticks and vibration"],
            ["Media", "CD-ROM (standard format)"],
            ["Audio", "24-channel ADPCM; 16-bit stereo sound, Dolby Surround (via audio output)"],
            ["Power", "AC 100–240V (adaptive); power consumption ~10–12 W"],
            ["Date / Price", "December 1994 (Japan), September 1995 (USA), $299 (with controller)"],
            ["Variants", "PSOne (compact redesigned version, 2000), accessories (modem, external HDD, hardware VR)"]
        ],
        "overview": "The Sony PlayStation was Sony’s first 32-bit console. Its processor (MIPS R3000) ran at 33 MHz, while its graphics system rendered and transformed polygonal 3D objects (hundreds of thousands of triangles per second). Thanks to CD media, it could store significantly more data (audio, FMV, levels) compared to cartridges. Its 16-bit audio and strong soundtracks were widely praised. Key strengths: hardware-accelerated 3D graphics, CD-quality audio, and multimedia capabilities. The platform handled large textures, full-color models, FMV video, and voice acting—far beyond previous consoles. At the same time, Sony gave developers far more freedom (no strict release limits like on the NES), which encouraged the growth of independent studios.",
        "games": [
            ["Final Fantasy VII (1997)", "A landmark RPG by Square that became the defining “iconic JRPG” of the 3D era. Innovation: full use of CD storage for integrating extensive FMV sequences and high-quality audio (music and character voices). It also introduced cinematic storytelling techniques (camera work, cutscenes), proving that games could feel like films."],
            ["Metal Gear Solid (1998)", "A stealth-action game that brought deep cinematic presentation to consoles (stealth gameplay, heavy use of cutscenes) and high replay value. The Dual Analog controller improved aiming and camera control (even though the game launched before the official DualShock release). Innovation: new storytelling methods in interactive media, combining narrative complexity with immersion through voice acting and direction."],
            ["Tomb Raider (1996)", "A 3D action-adventure starring Lara Croft. It highlighted the PS1’s strengths in real-time exploration with a third-person camera. It showcased smooth animation (500+ animation frames for the character) and genre blending (platforming, shooting, exploration)."],
            ["Gran Turismo (1997)", "A racing simulator that surpassed competitors in physics accuracy and the number of cars (hundreds of vehicles), thanks to the hardware power. Innovation: one of the first realistic console driving simulators with detailed car models and tracks, plus memory card saves for player progression."],
            ["Resident Evil (1996)", "A cult survival horror game using pre-rendered backgrounds and atmospheric 3D audio. Key innovation: dynamic camera angles and rich sound design, demonstrating the PS1’s stereo audio capabilities."]
        ],
        "impact": "The PlayStation pushed the industry to a new technological level: it became the first console to sell over 100 million units. It made 3D graphics the industry standard and a primary focus for developers and publishers. CDs reduced production costs while increasing game scope (FMV, music), and helped expand the audience with more mature themes. PlayStation broke Nintendo’s dominance—major franchises like Final Fantasy and Konami titles moved to Sony, boosting its popularity. It expanded genres: 3D action, horror, and narrative-driven games became mainstream. Sony introduced new ways of interacting with players: DualShock controls, early network-like services, and openness to indie developers. From a business perspective, PlayStation helped establish a market for more cinematic games and proved the power of branding through major franchises (Crash Bandicoot, Spyro, Colin McRae). Its impact was clear: consoles stopped being seen as just “toys for kids” and became full-fledged entertainment platforms for digital media."
    },
    {
        "title": "PlayStation 2",
        "year": "2000",
        "quote": "\"We’re just going to be forced to educate the Sony Corporation a bit\"",
        "tags": ["DVD", "Blu-ray", "Online Games", "Emotion Engines"],
        "specs": [
            ["CPU", "“Emotion Engine” – 64-bit RISC based on MIPS IV (with VPU0/1 coprocessors), 294.912 MHz"],
            ["GPU / Graphics", "Graphics Synthesizer (150 MHz chip, 4 MB embedded VRAM)"],
            ["RAM", "32 MB RDRAM (shared with CPU); 4 MB video RAM"],
            ["Storage", "DVD-ROM (2× speed); reads DVD/CD; capable of playing DVD movies"],
            ["Display Output", "Support for 480i/p, 720p; video via component cable (up to 1080i in later models)"],
            ["Controllers", "DualShock 2 (analog input on both buttons and sticks), two ports"],
            ["Media", "DVD discs, CDs, third-party storage (HDD expansion for certain games)"],
            ["Audio", "48 kHz stereo CD; Dolby Surround; hardware/software DVD audio decoding"],
            ["Power", "~220–240 V (approx. 60–140 W depending on model)"],
            ["Date / Price", "March 2000 (Japan), October 2000 (USA); price $299.99 (US)"],
            ["Variants", "“Fat” and “Slimline” (2004); versions with HDD and network adapter; PSX (PS2 + DVD combo system)"]
        ],
        "overview": "The PlayStation 2 became the leading console of the sixth generation and the best-selling console of all time (160 million units). Its CPU, the “Emotion Engine,” featured a 128-bit SIMD architecture and two vector coprocessors (VPU0/1) for accelerating 3D calculations. The 150 MHz graphics chip with 4 MB VRAM enabled polygon smoothing and texturing with effects previously unavailable. The key strength of the PS2 was its DVD drive: the massive storage capacity allowed for extensive cutscenes, orchestral music, and large game worlds. It also supported backward compatibility with original PlayStation games and offered early network capabilities (via HDD and Ethernet).",
        "games": [
            ["Grand Theft Auto: San Andreas (2004)", "One of the largest PS2 games, featuring a massive open world. For the first time in the series, RPG elements (character stats progression) were introduced, offering unprecedented player freedom. Innovation: character development tied to actions (training increases strength/stamina) and seamless world streaming without clear level separation, enabled by DVD storage and faster loading."],
            ["God of War (2005)", "An action game set in Greek mythology. It showcased epic game design (combo-based combat and QTEs) and highly advanced visuals: large-scale gameplay sequences, massive bosses, and detailed textures. It fully utilized the Emotion Engine for smooth animation."],
            ["Resident Evil 4 (2005)", "A revolution in survival horror: introduced the over-the-shoulder third-person perspective. The game leveraged PS2 capabilities with depth of field, dynamic shadows, and rich FMV content. It improved camera and aiming interaction, setting trends for future action games."],
            ["Final Fantasy X (2001)", "The first PS2 entry in the series. Known for high-quality FMV cutscenes and full voice acting. It represented a cinematic approach to JRPGs, using system capabilities for synchronized voice and presentation."],
            ["Gran Turismo 3/4 (2001/2004)", "Racing simulators that set new standards for realism: precise handling, a huge number of cars and tracks, and detailed environments. Gran Turismo 4 in particular utilized PS2’s capabilities for HD modes and “Custom Soundtracks” via the HDD adapter (allowing players to use their own music)."]
        ],
        "impact": "The PS2 remains the best-selling console of all time (160 million units) and set a benchmark for hardware performance for over a decade. It established DVD as the standard game medium, enabling larger, more complex productions. Numerous major franchises flourished on PS2 (God of War, Shadow of the Colossus, Ratchet & Clank), replacing earlier generations. Backward compatibility expanded its library to thousands of titles. This era also introduced more persistent player data: the official HDD allowed larger save files (e.g., Final Fantasy XI) and supported early online gaming. PS2 culture was defined by multi-platform development and growing online multiplayer (MMOs like Final Fantasy XI, racing networks for Gran Turismo). From a business perspective, Sony achieved market dominance, and the DVD-based model pushed the industry toward multimedia convergence, including film distribution. After the PS2, Sony effectively defined what a modern console should be: powerful hardware, high-quality games, and strong multimedia functionality (including a built-in DVD player)."
    },
    {
        "title": "Xbox",
        "year": "2001",
        "quote": "\"Xbox is everything The Rock is: cutting-edge, powerful, and exciting\"",
        "tags": ["PC Architecture", "HDD", "Xbox Live", "Halo", "Network Play"],
        "specs": [
            ["CPU", "733 MHz Intel Pentium III (Coppermine core, 32-bit)"],
            ["GPU / Graphics", "NVIDIA NV2A (custom GeForce 3 variant) @ 233 MHz (4 pixel pipelines, 8 vertex units)"],
            ["RAM", "64 MB DDR SDRAM (dual-channel, 6.4 GB/s)"],
            ["Storage", "DVD-ROM 2×; built-in 8–10 GB hard drive (HDD)"],
            ["Display Output", "HDTV support: 480p/720p/1080i/p via component; 480i/576i for SDTV"],
            ["Controllers", "Xbox Controller (analog sticks, 6 buttons); four USB ports for controllers"],
            ["Media", "DVD discs, CDs; external USB storage (HDD supported)"],
            ["Audio", "Dolby Digital 5.1 (via optical S/PDIF), 3D audio APIs (DirectSound/DirectX)"],
            ["Network", "Built-in 10/100 Ethernet; Xbox Live (with voice chat)"],
            ["Power", "Internal power supply, 100–240 V; ~90–130 W peak consumption"],
            ["Date / Price", "November 2001 (USA), price $299"],
            ["Variants", "Original Xbox (later “Xbox Live Starter Pack”), “Xbox 360 Preview Program” (demos), early Xbox 360-related initiatives"]
        ],
        "overview": "The original Xbox marked Microsoft’s debut in the gaming industry and was built on PC-like architecture. Its 733 MHz Pentium III CPU and powerful NVIDIA GPU (similar to a GeForce 3) made it the most powerful console of its generation. The built-in hard drive (8–10 GB) allowed fast data access and game installations. It was also the first console to include an Ethernet port by default for online gaming. Key features included support for up to 480p resolution, Dolby Digital 5.1 (the first console with true 6-channel optical audio output), four controller ports (for instant local multiplayer), and integrated voice chat in online games. This “console-PC hybrid” offered a rich feature set but required more user involvement: managing HDD installs, system updates, and working within a DirectX-based environment similar to Windows.",
        "games": [
            ["Halo: Combat Evolved (2001)", "The flagship “killer app” that launched a major franchise. Innovation: making first-person shooters comfortable on consoles, introducing LAN multiplayer (and later Xbox Live), and delivering cinematic combat. The game fully utilized Xbox hardware with large environments, lighting effects, and network play."],
            ["Project Gotham Racing (2001)", "A realistic racing game running at 60 FPS. Its standout feature was the Kudos system (rewarding stylish driving). Technically, it showcased the GPU’s capabilities with reflections, detailed cars, and complex tracks."],
            ["Splinter Cell (2002)", "A stealth-action game by Ubisoft that raised the bar for lighting and shadow systems (players could hide almost completely in darkness). It used multi-channel audio for immersion (footsteps, environmental sounds). It also aligned closely with PC standards via DirectX."],
            ["Ninja Gaiden (2004)", "A benchmark action game. It brought fast-paced combat, complex controls, highly detailed enemies, and heavy use of particle effects. The hardware allowed for fluid animation and demanding gameplay systems."],
            ["Oddworld: Munch’s Oddysee (2001)", "The first Oddworld game on Xbox, highlighting cross-platform development and multiplayer aspects (up to four players). It demonstrated strong audio design and texture quality."]
        ],
        "impact": "Xbox introduced full-scale online console services with Xbox Live (launched in 2002), paving the way for subscriptions and DLC. It pushed the market toward higher resolutions and online multiplayer—players widely experienced shooters and racing games online with voice communication for the first time. Due to its PC-like architecture (Windows-compatible), Microsoft created a unified ecosystem (PC–Xbox integration, Xbox Live service), simplifying cross-platform development and publishing. The Halo series became Microsoft’s flagship franchise, driving brand loyalty. Culturally, Xbox attracted “hardcore” and competitive players, especially those interested in online gaming and esports. It also intensified the push for multi-channel audio (5.1 and beyond) and accelerated adoption of HDTV standards through component video and later HDMI trends. Note: Many analysts consider the original Xbox proof that a well-designed console could compete with Sony and Nintendo through raw power and strong online services."
    },
    {
        "title": "Nintendo Wii",
        "year": "2006",
        "quote": "\"Video games are meant to be one thing only. Fun. Fun for everyone!\"",
        "tags": ["MotionControl", "Casual Games", "Family Entertainment", "Wiimote"],
        "specs": [
            ["CPU", "IBM Broadway (PowerPC architecture) @ 729 MHz"],
            ["GPU / Graphics", "ATI Hollywood @ 243 MHz (Custom GCN-based architecture for Wii)"],
            ["RAM", "24 MB 1T-SRAM; 64 MB GDDR3 VRAM"],
            ["Storage", "Built-in DVD drive (Support for Wii/GameCube discs); Backward compatibility with GameCube"],
            ["Display Output", "SDTV: 480i/p; HDTV: Component 480p (PAL: 576i/p)"],
            ["Controllers", "Wireless Wii Remote + Nunchuk (Motion-sensing); Four GameCube ports (Original model)"],
            ["Media", "Wii Optical Disc (12 cm DVD format)"],
            ["Audio", "40 kHz Stereo (via RCA/Composite)"],
            ["Power", "AC 100–240V; External Power Supply"],
            ["Date / Price", "November 2006 (USA) – $249.99"],
            ["Variants", "RVL-001 (Original), RVL-101 (Second gen without GC compatibility), Wii Mini"]
        ],
        "overview": "The Nintendo Wii defined the seventh generation by prioritizing innovative control methods over \"raw power.\" While its CPU and GPU performance trailed behind competitors, developers achieved a fluid user interface and unique gameplay. The primary breakthrough was the controller setup: the Wii Remote and Nunchuk, equipped with 3D motion sensors (gyroscope and accelerometer), paired with a sensor bar for precise pointing. Motion tracking radically transformed gameplay. Players swung their arms to play tennis or slash a sword, attracting an entirely new demographic. The system’s strengths lay in its accessibility and low hardware costs combined with the high \"experiential\" impact of its controls. This user-friendly approach propelled Nintendo to market leadership, with over 101 million units sold.",
        "games": [
            ["Wii Sports (2006)", "A pack-in title designed to demonstrate the controller's capabilities. This collection of mini-games (tennis, bowling, golf, boxing, baseball) allowed the Wii Remote to mirror real-world movements. As a \"killer app,\" it was the driving force behind the console's global success."],
            ["Wii Fit (2007)", "A pack-in title designed to demonstrate the controller's capabilities. This collection of mini-games (tennis, bowling, golf, boxing, baseball) allowed the Wii Remote to mirror real-world movements. As a \"killer app,\" it was the driving force behind the console's global success."],
            ["The Legend of Zelda: Twilight Princess (2006)", "A classic action-adventure set in a massive world. It utilized the Wii Remote for sword swings and aiming, providing a more immersive feel while maintaining the core Zelda gameplay."],
            ["Mario Kart Wii (2008)", "An arcade racer featuring tilt-controls. It introduced online multiplayer to the series on home consoles and supported the Wii Wheel accessory for a more realistic driving feel."],
            ["Metroid Prime 3: Corruption (2007)", "A first-person shooter that mastered the hybrid control scheme: the Wii Remote for aiming and the Nunchuk for movement. This achieved a leap in precision and immersion for console FPS games."]
        ],
        "impact": "The Wii sparked a massive gaming resurgence, becoming a genuine social phenomenon. Through motion controls, Nintendo tripled its potential audience—engaging seniors and non-gamers—and forced competitors to respond with Microsoft’s Kinect and Sony’s PlayStation Move. The perception of gaming shifted: consoles were no longer \"just for kids\" but became tools for family bonding and fitness. Genres expanded into dance (Just Dance) and yoga. From a business perspective, the model of \"affordable hardware + high-margin accessories\" (Balance Board, Wii MotionPlus) was incredibly profitable. While it eventually led to some growing pains (the struggle of the Wii U and the eventual pivot to the hybrid Switch), the Wii secured Nintendo’s dominance in the 7th generation, proving that innovative interaction is a winning strategy that doesn't require cutting-edge graphics."
    },
    {
        "title": "Nintendo Switch",
        "year": "2017",
        "quote": "\"Switch is the first major hybrid console that combines a home and portable system\"",
        "tags": ["Hybrid", "JoyCon", "HD", "Portability", "Zelda"],
        "specs": [
            ["SoC (CPU+GPU)", "NVIDIA Tegra X1 (ARM 4×A57 + 4×A53, 1.02 GHz) + Maxwell GPU (256 cores)"],
            ["RAM", "4 GB LPDDR4 (integrated)"],
            ["Storage", "32 GB flash memory (expandable via microSDXC)"],
            ["Display Output", "6.2″ IPS LCD, 1280×720 (60 FPS)"],
            ["Выход (TV)", "HDMI output up to 4K/60 Hz (docking and scaling via dock station)"],
            ["Controllers", "Detachable Joy-Con (Motion, IR cameras, HD Rumble), 2 USB ports on dock"],
            ["Media", "Game Card (cards up to 32 GB)"],
            ["Audio", "Stereo speakers, 3.5 mm audio; 5.1 support via HDMI"],
            ["Network", "Wi-Fi 802.11ac, Bluetooth 4.1; LAN via dock (LAN model in dock)"],
            ["Power", "Lithium-ion battery 4310 mAh (≈3–7 h of gaming); Type-C USB PD (15 V, 2.6 A)"],
            ["Date / Price", "March 2017 (WW), $299.99 (Switch); $199 (Lite, 2019)"],
            ["Variants", "Original (Dock+Joy-Con), Switch Lite (handheld only), Switch OLED (6.2→7″ OLED screen)"]
        ],
        "overview": "Nintendo Switch is a next-generation hybrid console. The system combines mobility and home gaming: you can play in handheld mode on the screen or insert it into a dock for TV play. The hardware base is the NVIDIA Tegra X1 ARM chip with 4 GB of RAM, which corresponds to the previous generation Switch Lite. Strengths: instant mode switching, detachable controllers (Joy-Con) with a suite of sensors (HD Rumble, gyroscope, IR camera). Although the graphics are inferior to the PS4, the console compensates with unique flexibility and \"people's\" games. Nintendo chose a compromise between performance and innovation.",
        "games": [
            ["The Legend of Zelda: Breath of the Wild (2017)", "A massive open world with detailed physics and environment. For the first Zelda in hybrid mode, the announcement required advanced control and rendering. Innovation: a dynamic weather and physics system where the player can interact with the environment via the Switch sensor; and most importantly, the concept of \"total freedom of action\" – Hyrule became truly alive and interactive (which critics positively noted as a \"reboot of the series\")."],
            ["Super Mario Odyssey (2017)", "Mario in 3D. The game introduces mechanics for capturing enemies with the hat Cappy, challenging the traditional platformer. Technically, the game delights with rich worlds and the ability to play both in handheld and on TV (smooth changes in frequency and resolution)."],
            ["Animal Crossing: New Horizons (2020)", "A \"life of your own\" life simulator with real-time passage of time and online cooperation. Innovation: a deep social component: players can travel to each other, exchange items via the Internet, and create entire communities. The console allowed for the storage of extensive user data and the introduction of a system of paid DLC and events."],
            ["Splatoon 2 (2017)", "A competitive-cooperative shooter in an animation style. It directly demonstrated HD Rumble and wireless communication capabilities. One of the first major multiplayer games on Switch with constantly evolving content."],
            ["Mario Kart 8 Deluxe (2017)", "An updated version of the popular racing game. It uses sensors for control and offers cross-platform online play. The game clearly shows how accurately the controllers and stable internet work."]
        ],
        "impact": "Switch quickly became a trend: the lack of direct analogs (with the exception of the still unpopular Wii U) made it popular among both long-time \"Nintendoids\" and new gamers. Innovations: support for the digital eShop and cloud saves (starting 2022) brought it closer to the services of other consoles. The change in form factor (from handheld to stationary) expanded types of use: people play while traveling and at home with one device. This seriously affected genres – family and arcade games (Smash Bros, Mario Party) flourish on Switch, while AAA titles are transformed (rated for lower power) into the \"indie on steroids\" genre. Switch also became the first Nintendo console with a full-fledged online store and online play without a subscription fee (except for the optional Switch Online subscription). In business – the success of Switch meant Nintendo's return to leadership (the console surpassed the Wii in total sales). In the industry, this \"hybrid gaming\" model spawned a new format: competition with it is awkward, as other manufacturers (PS4/PS5, Xbox) do not have a clear handheld analog. Culturally, Switch brought together DS owners and home console owners – Nintendo formed a universal ecosystem of \"Switch + mobile gamers.\" Finally, the 2020–21 pandemic turned the Switch into one of the most popular consoles (many had to play co-op on the couch at home while working via the dock), and its library was actively replenished with digital releases, including many"
    },
    {
        "title": "PS5 and Xbox Series X",
        "year": "2020",
        "quote": "\"The SSD is really a key for the next generation... it's a game changer\"",
        "tags": ["SSD Revolution", "RayTracing", "4K120FPS", "Quick Resume"],
        "specs": [
            ["CPU", "PS5: 8× Zen 2 (3.5 GHz) | XSX: 8× Zen 2 (3.8 GHz)"],
            ["GPU / Graphics", "PS5: AMD RDNA 2 (10.3 TFLOPS) | XSX: Custom RDNA 2 (12.15 TFLOPS)"],
            ["RAM", "PS5: 16 GB GDDR6 | XSX: 16 GB GDDR6"],
            ["Storage", "PS5: SSD NVMe 825 GB | XSX: NVMe SSD 1 TB"],
            ["Display Output", "Both support HDMI 2.1 (up to 8K/60 Hz or 4K/120 Hz)"],
            ["Controllers", "DualSense vs Xbox Wireless Controller"],
            ["Media", "Ultra HD Blu-ray (4K) or Digital Editions"],
            ["Audio", "Tempest 3D Audio Engine vs Dolby Atmos, DTS:X"],
            ["Network", "PSN / Wi-Fi 6 vs Xbox Live / Wi-Fi 5"],
            ["Power", "PS5: ~350W PSU | XSX: ~315W PSU"],
            ["Date / Price", "Nov 2020: $499 (Disc) / $399 (PS5 Digital) or $299 (Series S)"],
            ["Variants", "PS5 Slim/Pro, Series S (scaled-down)"]
        ],
        "overview": "PS5 and Xbox Series X are 9th-generation consoles. Both utilize AMD Zen 2 CPUs and graphics based on the latest RDNA 2 architecture with hardware Ray Tracing. PS5 offers ~10.3 TFLOPS of power, while XSX provides ~12.16 TFLOPS. The main innovation for both is ultra-fast SSDs. PS5 features its own custom SSD controller (5.5 GB/s), allowing for near-instant loading of game worlds (e.g., Ratchet & Clank: Rift Apart switches levels in milliseconds). Series X provides similar speeds (with compression), plus an optional Expansion Card. Both support 4K@120 and 8K output. The PS5 DualSense added adaptive triggers and dual-actuator haptic feedback; Sony also introduced Tempest 3D Audio (emulating spatial effects without a dedicated audio card). Series X retained the Xbox Wireless Controller design (adding a \"Share\" button) with a focus on unification (MS account, PC gaming, Game Pass).",
        "games": [
            ["Ratchet & Clank: Rift Apart (2021, PS5)", "Demonstrates SSD advantages: the hero jumps between dimensions without loading screens, utilizing the PS5's ultra-fast memory. Innovation: instant data streaming—world builders can throw the player into diverse locations without delays."],
            ["Marvel’s Spider-Man: Miles Morales (2020, PS5)", "Utilizes Ray Tracing (reflections, lighting) and 4K graphics, as well as dynamic frame tracking up to 60 FPS (a similar approach to XSX). This is a specimen of the \"next generation\"—vivid textures, cinematic shots, and modern physics."],
            ["Astro’s Playroom (2020, PS5)", "A built-in demo game that fully reveals DualSense features (haptic feedback, adaptive triggers). It literally teaches the player everything about the new controller—from the feel of different surfaces to trigger resistance (e.g., a compressing gas canister)."],
            ["Demon’s Souls (2020, PS5 remake)", "Showcased the PS5's graphical strength—4K resolution, ray-traced reflections, and ultra-high detail."],
            ["Assassin’s Creed Valhalla (2020, PS5/XSX)", "Uses the SSD for fast landscape loading, and on Xbox Series X, ray tracing for lighting (HDR and VRR support). Innovation: vast locations and crossplay across platforms (the console's ability to maintain online services)."],
            ["Halo Infinite (2021, XSX)", "The return of the legendary shooter. A promising sandbox, online battles, and 120 FPS in multiplayer on XSX. Implements DirectX12 Ultimate technologies (DXR, mesh shaders)."],
            ["Forza Horizon 5 (2021, XSX)", "An open-world racing game with a dynamic climate—on Series X, it displays 4K/60 FPS with ray tracing in global illumination. Innovation: a massive procedural world of Mexico with real-time weather, demonstrating the platform's power."],
            ["Microsoft Flight Simulator (2020, XSX)", "A computer simulator of global flights—its console port demonstrates interactive map streaming and real-world cities. Although originally a PC series, the game runs on Series X in 4K with deep detailing."]
        ],
        "impact": "PS5 and Series X became the first true 4K console generation (with 120 FPS output), pushing the industry toward \"real-time\" (Ray Tracing, VRR, 8K). Games are no longer limited by loading screens and long cutscenes: SSDs are changing the development approach (there's no longer a reason to \"wait for loading\"). Game Pass on Xbox and the growing PS Plus clearly influence the distribution model—the \"Netflix for games\" trend is gaining steady momentum. Both devices expanded game design possibilities: hybrid ecosystems emerged (cloud gaming, DLSS/FSR upscaling, etc.). Business models: a new round of competition—a transition from a console war to an \"ecosystem war\" (Microsoft focusing on Windows/Xbox Live compatibility, Sony on exclusives and PlayStation Network). Consoles influence genres: ray tracing added new effects to shooters/racers, while DualSense brings a new level of immersion (future games will use adaptive triggers for gameplay). Culturally: both contribute to the return of \"gamer-focused\" consoles—with minimal compromises in graphics."
    }
];
