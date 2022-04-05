import { List } from '@mantine/core';
import { ReactElement } from 'react';
import { PBreak } from './components/PBreak';

const bullets = (items: string) => (
    <List>
        {items
            .split('\n')
            .map((item) => item.trim())
            .filter((item) => item)
            .map((item, key) => (
                <List.Item key={key}>{item}</List.Item>
            ))}
    </List>
);

export const descriptions: Record<string, ReactElement> = {
    'Computer Programming and Web Development': (
        <>
            Our student-centered curriculum is enhanced by the physical design
            and technology-rich content of our classroom. Students move around
            this space as they collaborate, plan, imagine, problem-solve,
            manage, lead, participate, discuss, debate, and ponder with each
            other, the instructors, and clients.
            <PBreak />
            Our base curriculum encompasses web programming in HTML & CSS with
            Notepad++, XML, & JavaScript, along with programming in Alice 3,
            Python, Java, and possibly C#, writing, and Microsoft Office tools
            including MS Project. Students have Parallax Scribbler robots,
            Parrot AR Drones, a NAO robot, and several smaller robots and live
            client web sites to help expand their skills and knowledge.
            <PBreak />
            Additional areas for students to explore include:
            {bullets(`
            Video game development
            Server-side and mobile web applications
            3-D animation with Blender and Autodesk 3DS MAX & Maya
            Database development with PHP and MySQL
            Image/video manipulation with Adobe Master Suite
            OSHA 10-Hour General Industry certificate
            Google IT Support Professional certificate
            `)}
            <PBreak />
            Other opportunities our students are exposed to are co-op jobs,
            senior capstone projects, community service projects in sending
            towns, SkillsUSA and BPA competitions, Linux operating system, The
            Stock Market Game with The Boston Globe, and field trips to local
            colleges and industry locations.
        </>
    ),
    'Design and Visual Communications': (
        <>
            Design and Visual Communications (DVC) is an exciting, fast paced,
            creative, and ever evolving program. Curriculum is designed to
            expose students to vast career opportunities that exist in the
            creative, multi-media, and communications industry.
            <PBreak />
            Students receive training across various media, including print,
            video, web/interactive, and photography. Students learn how to
            problem solve, experiment, and explore to create visual solutions
            using the Adobe® Creative Cloud collection of applications. Students
            also practice valuable employment skills, create resumes, interact
            with clients, and complete real-world projects for businesses and
            organizations in the Assabet Valley RTHS school district.
            <PBreak />
            Students graduating from the DVC program will leave with a
            professional portfolio, demo reel, Adobe® Certification, and OSHA
            10-hour safety certification. DVC graduates will be ready to enter a
            2 or 4-year college program or pursue entry-level employment in the
            communications industry.
        </>
    ),
    'Business Technology': (
        <>
            Utilizing current office technology, equipment, and software
            programs, students will prepare for Microsoft Office Specialist
            Certification, create career portfolios, and complete client
            projects. They experience the business environment through the
            internship work within the school&apos;s administrative offices and
            junior/senior cooperative placement opportunities.
            <PBreak />
            In addition to technical skills, the major emphases of the
            curriculum are effective communication and critical thinking and
            problem solving skills. Specialized instruction is provided based on
            student skill levels and interests. Graduates begin careers in a
            wide venue of business opportunities or pursue further education in
            business, administration, finance, management, etc.
            <PBreak />
            Business Technology provides hands-on training in:
            {bullets(`
            Data entry
            Word processing (Microsoft Word)
            Spreadsheet applications (Microsoft Excel)
            Database creation and management (Microsoft Access)
            Multimedia presentations (Microsoft PowerPoint)
            Indexing and filing
            Financial literacy
            Manual and computerized accounting (QuickBooks)
            Web page maintenance (HTML)
            Office procedures
            Business communications
            Business operations
            Entrepreneurship
            Project management
            Event management
            `)}
        </>
    ),
    Cosmetology: (
        <>
            Cosmetology is a program designed to prepare students for a career
            in the continually-evolving field of the professional beauty
            technician. Students are trained in manicuring; the cutting,
            styling, coloring, and waving of hair; as well as the treatment of
            skin and scalp. Students are also trained in sanitary procedures
            relating to all areas of study.
            <PBreak />
            An active, on-site clinic provides students the opportunity to
            refine their skills in a fully-equipped salon setting with a private
            esthetics center. Program graduates are prepared for the state
            examination in Cosmetology.
            <PBreak />
            Course Philosophy:
            <PBreak />
            Students will receive instructions, demonstration, and clinical
            opportunities necessary in preparation for the Massachusetts State
            Board of Cosmetology Exam.
            <PBreak />
            Students will acquire the necessary knowledge and skills that would
            enable them to pursue a separate manicuring or esthetics license.
            <PBreak />
            Students will become responsible, professional cosmetologists and
            educated, creative role models in their trade area.
        </>
    ),
    'Electrical Wiring': (
        <>
            Electrical Wiring is a program designed to prepare students to
            install electrical equipment for light, heat, power, motor controls,
            and data. Students learn various residential, commercial, and
            industrial wiring methods and techniques according to the
            Massachusetts Electrical Code. Instruction includes blueprints,
            schematics, wiring diagrams, layout, installation, cost estimation,
            and safety. Students learn in shop simulations, laboratory
            experiments, and live, on-site jobs with their instructor in the
            community. After successful completion of the electrical wiring
            curriculum, the student can earn up to 1500 hours of the required
            work experience and 300 hours of the education requirements toward
            state of Massachusetts journeyman electrician apprenticeship
            program.
        </>
    ),
    'Heating, Ventilation, Air Conditioning, and Refrigeration': (
        <>
            The Heating, Ventilation, Air Conditioning, and Refrigeration
            (HVAC/R) field is one of the fastest expanding occupations in the
            country today. Skills gained in the program will prepare students
            for various careers in installing, maintaining, and servicing HVAC/R
            equipment.
        </>
    ),
    Carpentry: (
        <>
            House Carpentry is a program that prepares individuals to apply
            technical knowledge and skills to layout, cut, fabricate, erect,
            install, and repair wooden structures and fixtures using hand and
            power tools. This program includes instruction in technical
            mathematics, framing, construction material and selection, job
            estimating, blueprint reading, foundations and roughing-in, finish
            carpentry techniques, and applicable codes and standards.
            <PBreak />
            In addition, the program will prepare individuals to apply technical
            knowledge and skills to set up and operate industrial woodworking
            machinery and to use such machinery to design and fabricate wooden
            components and complete articles.
            <PBreak />
            {bullets(`
            Identifying carpentry safety
            Demonstrating the fundamentals of carpentry
            Using hand tools
            Operating portable power tools
            Using ladders and scaffolds
            Framing floors
            Framing walls
            Framing ceilings and roofs
            Finishing the exterior
            Finishing the interior
            Performing commercial carpentry tasks
            Using cabinet making joinery and mechanical fasteners
            Setting up, operating and maintaining stationary power tools
            Fabricating traditional and modern casework
            Applying hardware
            `)}
        </>
    ),
    'Painting and Design': (
        <>
            Do you like to...
            {bullets(`
            design spaces?
            coordinate colors?
            create decorative finishes?
            use your imagination?
            `)}
            <PBreak />
            The Painting and Design program seeks to give students a wide array
            of skills that will reflect a strong, creative work ethic. Problem
            solving and hands-on experience with ever changing materials keeps
            ideas fresh. High quality work is expected, and students will be
            given opportunities to redo work until it meets standards specified
            during instruction. Assessment methods will include written exams,
            tests and quizzes, oral and written research papers, reading
            assignments, and projects. Preparation towards co-op placement
            through community-based, live work gives students job experience.
            The Painting and Design program offers an integrated technical and
            academic learning experience that ensures everyone succeeds.
            <PBreak />
            Skills acquired:
            {bullets(`
            Painting
            Interior decorating
            Wallcovering
            Faux finishing
            Interior design
            Sign art
            Drywall finish
            Theatrical set design
            Estimating
            `)}
        </>
    ),
    Plumbing: (
        <>
            The demand for plumbers and pipe fitters is expected to outpace the
            supply of workers trained in this demanding but rewarding field.
            Plumbing is a licensed trade that requires not only strong technical
            knowledge and skill, but also a thorough understanding of the
            Massachusetts State Plumbing and Fuel Gas Code.
            <PBreak />
            The Plumbing Program is designed to feature both shop and off-campus
            jobsite learning opportunities. Students will master the
            installation and repair of water, waste, gas, and heating systems in
            both residential homes and commercial buildings.
        </>
    ),
    'Culinary Arts and Hospitality Management': (
        <>
            Culinary Arts is an instructional program that prepares individual
            students in food technology skills and customer relations while
            maintaining local sanitation codes in a safe working environment.
            Students will apply computer technology and work with
            state-of-the-art equipment in the restaurant, kitchen, and bakery
            areas.
            <PBreak />
            Culinary Arts focuses on curriculum development and standardized
            learning with emphasis on performance objectives, a variety of
            learning activities, and student assessment. Students engage in
            hands-on learning, related theory, and industry-related field trips
            driven by industry standards. The goal is to help students become
            responsible, competent, and productive members of society by
            incorporating academics, Mathematics, English, and Science. Other
            areas of focus include technology, employability skills, management
            and entrepreneurship, as well as career and professional
            development. Students will prepare for employment and higher
            educational opportunities so that they can continue to learn about,
            participate in, and contribute to a changing community and
            workplace.
            <PBreak />
            Through the operation of a popular on-site restaurant, as well as
            the catering of a variety of community functions, students have the
            opportunity to learn all aspects of the trade, such as:
            {bullets(`
            Sandwich making
            Baking
            Stock, sauce, and soup preparation
            Salad preparation
            Meat preparation
            Seafood fabrications
            Food cost management
            Supervisory development
            Sanitation
            Nutrition
            Beverage service
            Table service
            Customer relations
            Dining room operation
            Hospitality and Tourism
            Health and safety
            Inventory control
            `)}
        </>
    ),
    'Health Technology': (
        <>
            Health Technologies is an excellent program for students interested
            in a career in the high-demand area of healthcare and human
            services. Students train on campus in our nursing lab with the most
            up-to-date equipment available, including hospital beds and a full
            computer lab. Students continue their training in long-term care and
            assisted living facilities. Students who meet the Department of
            Public Health requirements may be eligible to take the American Red
            Cross Nurse Assistant exam.
            <PBreak />
            The curriculum includes related theory classes, including:
            {bullets(`
            Healthcare exploration
            Healthcare foundations
            Nurse Assistant
            Medical Assistant
            Growth and Development
            Dean Vaughn Medical Terminology
            `)}
            <PBreak />
            Students from our program may graduate with the following
            certifications:
            {bullets(`
            American Red Cross Certified Nursing Assistant
            Home Health Aide
            Person-Centered Dementia Care
            American Heart Association CPR for the Healthcare Provider with Automated External Defibrillator
            American Heart Association First Aid Certification
            American Red Cross BLS
            American Red Cross First Aid
            Stop The Bleed certification
            Geri-Care training
            OSHA Health Edition 10 hour certification
            `)}
        </>
    ),
    'Advanced Manufacturing': (
        <>
            The Advanced Manufacturing Department is a finely tuned program that
            prepares students to work in the modern, high tech field of
            manufacturing. Students will learn and practice the basic
            fundamentals of manufacturing throughout their stay in the Advanced
            Manufacturing Program. They will be instructed in the utilization
            and care of bench tools, inspection instruments, metal cutting
            lathes, milling machines, drilling machines, and grinders.
            <PBreak />
            Upon learning these basics, students shall be instructed in the more
            technologically modern aspect of computerized manufacturing.
            Included in this program are study segments involving the operation
            of modern, highly sophisticated computer numerical controlled (CNC)
            machinery.
            <PBreak />
            Students will also train on industry-standard computer software:
            MasterCam and SolidWorks.
            <PBreak />
            All aspects of the shop prepare the graduate with skills and
            knowledge to enter the manufacturing workforce or pursue
            post-secondary education.
        </>
    ),
    Biotechnology: (
        <>
            Welcome to Biotechnology!
            <PBreak />
            Biotechnology is a growing field with a wide range of exciting and
            challenging employment opportunities. Biotechnology is the
            commercialization of biology. It is an evolving discipline in which
            biological organisms are used to improve the lives of people and
            animals.
            <PBreak />
            The Biotechnology program is designed to prepare students for
            further education as well as for entry-level positions in
            biopharmaceutical manufacturing, research and development,
            laboratory animal care, environmental science, and forensic science.
            Students will engage in precise technical activities, maintain
            careful records, and work in teams in an orderly, clean environment.
            <PBreak />
            Students observe and learn about a variety of careers involved with
            biotechnology, from engineering to manufacturing to animal science.
            Examples of field trips taken to explore career opportunities in
            biotechnology include Shire Pharmaceuticals, Tufts Cummings
            Veterinary School, Worcester State University, Worcester Polytechnic
            Institute, Ariad Pharmaceuticals, and the Massachusetts State Crime
            Lab.
            <PBreak />
            Upperclassmen in biotechnology participate in student-driven
            projects that are presented in a shop-wide science fair. These
            projects may go on to compete at the Worcester Regional Science &
            Engineering Fair and the Massachusetts State Science & Engineering
            Fair. The Biotechnology Program also participates in the Wolbachia
            project, which examines the Wolbachia bacteria living within some
            local insects.
            <PBreak />
            Certifications offered in this vocational program include the OSHA
            10-Hour General Industry Certification & CPR.
            <PBreak />
            Students in this program complete the Assistant Lab Animal
            Technician (ALAT) training. The requirements for the ALAT
            certification are a year of practical experience working in a lab
            animal care facility and passing an exam. The school offers training
            materials and completion of the workbooks, and then students, upon
            graduation, can pursue and finish this certification. Please see the
            AALAS link to the American Association of Lab Animal Science for
            more information on this career path.
        </>
    ),
    'Metal Fabrication and Welding': (
        <>
            The Metal Fabrication and Welding program is designed to prepare
            students to be skilled fabricators, welders, and sheet metal
            workers. Instruction includes a range of skill areas, including
            welder performance qualification tests, small business ownership,
            sheet metal duct work, creative blacksmithing, ornamental ironwork,
            and CNC plasma cutting. Since welding is the core of our program,
            students can expect to learn all facets of welding in structural
            steel construction, earth moving equipment repair, pipe-line
            welding, and orbital welding of stainless steel and titanium for
            biotech applications. In addition to developing a solid foundation
            in technical skills, the program emphasizes core values, including
            community service and good citizenship.
            <PBreak />
            Field trips are an integral part of the curriculum in Metal
            Fabrication. Visits to apprenticeship programs, job sites, local
            businesses, and colleges show the students their futures in the
            field. Our students also have the opportunity to enter numerous
            regional/national welding and creative metal art competitions. This
            program has proudly produced many champions.
            <PBreak />
            Students who wish to continue their technical metal working
            education can attend two- or four-year colleges in the metallurgy,
            structural engineering, mechanical engineering, and metal art areas
            of study.
            <PBreak />
            Course Offerings:
            <PBreak />
            Welder Performance Qualification Tests in the following:
            {bullets(`
            Shielded Metal Arc Welding (SMAW / Stick)
            Gas Metal Arc Welding (GMAW / Mig)
            Gas Tungsten Arc Welding (GTAW / Tig / Heli-arc)
            Flux Core Arc Welding (FCAW)
            Pipe welding in all positions (SMAW and GTAW)
            `)}
            <PBreak />
            {bullets(`
            Titanium welding (GTAW process)
            Plasma arc cutting (computer-operated and hand-held)
            Oxygen acetylene welding (Gas Welding)
            Brazing
            Soldering copper and steel
            Sheet metal layout
            Decorative copper work
            Metal cutting
            Punching and drilling holes in metal
            Forming metal using power press brakes and rollers
            Operating power hand tools
            Operating stationary equipment to shape, form, and bend custom shapes in metal
            Ornamental iron work / blacksmithing
            Metal art using new technology
            Tool making and heat treating
            `)}
        </>
    ),
    'Automotive Collision': (
        <>
            Automotive Body Repair is an increasingly technical and continually
            changing field. This program provides training in all aspects of
            vehicle repair and reconditioning, including sheet metal work,
            unibody alignment, MIG welding, collision repair, computerized
            estimating, and finish paint.
            <PBreak />
            The following skills will be learned:
            {bullets(`
            Preparing car for painting
            Applying finish coat
            Straightening & replacing panels
            MIG welding
            Estimating physical damage
            Structural analysis & repair: frame / unibody
            Removing & replacing auto glass
            Servicing body work
            Suspension training
            Servicing air conditioning
            Panel bonding
            Applied Auto Collision mathematics and science
            `)}
            <PBreak />
            Additional information:
            {bullets(`
            Seniors take the MACS - Mobile Air Conditioning Society certification test.
            Our state-of-the-art facility includes a computer laser measuring system
            OSHA safety credentials
            This field also provides opportunity for automotive excellence ASE Certification
            Instructors are ASE certified
            Shop is NATEF Certified
            `)}
        </>
    ),
    'Automotive Technology': (
        <>
            The Automotive Technology program is designed to provide young men
            and women the knowledge and critical thinking skills required to
            meet the growing demands of the automotive industry.
            <PBreak />
            The Automotive Technology Department is NATEF Master Certified
            through the National Automotive Technicians Education Foundation.
            Graduates of the department are consistently recruited by local
            automotive businesses and hold a variety of positions in the
            automotive industry.
            <PBreak />
            The Automotive Technology facility includes a state-of-the-art lab
            and a fully equipped operational shop that is open to the public:
            {bullets(`
            Service and repair brakes (including ABS)
            Service and repair steering and suspension system (including electronic and active systems)
            Four wheel alignment service
            Service and repair power train (electronic transmission)
            Maintaining electrical and electronic systems
            Service and repair engines
            Perform vehicle maintenance services
            Service and repair tires (including low-profile and run-flat radials)
            Service and repair exhaust systems
            Service and repair fuel injection systems
            Service and repair emission control systems
            Service and repair automotive electrical and electronic systems
            Service and repair air conditioning systems (including climate control)
            `)}
            <PBreak />
            Certifications available in
            {bullets(`
            A/C Refrigerant Recovery & Recycling
            Hazardous Waste SP2
            Ford High School Service Training/Automotive Career Exploration Certification
            AllData Service Information Systems
            Valvoline lubricants
            Snap-On Shop Key Service Management System
            `)}
        </>
    ),
};
