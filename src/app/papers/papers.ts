import {Author, Paper} from '../paper/paper'

export const AUTHORS: { [id: string] : Author; } = {
  'me': {firstname: 'Mattia', lastname: 'Samory'},
  'Shruti': {firstname: 'Shruti', lastname: 'Phadke'},
  'Tanu': {firstname: 'Tanushree', lastname: 'Mitra'},
  'Federica': {lastname: 'Bogo', firstname:'Federica'},
  'Anna': {lastname: 'Belloni Fortina', firstname:'Anna'},
  'Stefano': {lastname: 'Piaserico', firstname:'Stefano'},
  'Enoch': {lastname: 'Peserico', firstname:'Enoch'},
  'Vartan': {lastname: 'Abnousi', firstname: 'Vartan Kesiz'},
  'Cinzia': {lastname: 'Pizzi', firstname:'Cinzia'},
  'Indira': {lastname: 'Sen', firstname:'Indira'},
  'Fabian': {lastname: 'Floeck', firstname:'Fabian'},
  'Claudia': {lastname: 'Wagner', firstname:'Claudia'},
  'Isabelle': {lastname: 'Augenstein', firstname:'Isabelle'},
  'Eshwar': {lastname: 'Chandrasekharan', firstname:'Eshwar'},
  'Shagun': {lastname: 'Jhaver', firstname:'Shagun'},
  'Hunter': {lastname: 'Charvat', firstname:'Hunter'},
  'Amy': {lastname: 'Bruckman', firstname:'Amy'},
  'Cliff': {lastname: 'Lampe', firstname:'Cliff'},
  'Jacob': {lastname: 'Eisenstein', firstname:'Jacob'},
  'Eric': {lastname: 'Gilbert', firstname:'Eric'},
  'Vic': {lastname: 'Cappelleri', firstname:'Vincenzo-Maria'},
  'Jonathan': {lastname: 'Lloyd', firstname:'Jonathan'},
  'James': {lastname: 'Hawdon', firstname:'James'},
  'Anirudh': {lastname: 'Srinivasan', firstname:'Anirudh'},
  'Julian': {lastname: 'Kohne', firstname:'Julian'},
  'Marcella': {lastname: 'Mandanici', firstname:'Marcella'},
  'Sergio': {lastname: 'Canazza', firstname:'Sergio'},
}

export const PAPERS: Paper[] = [
  {
    authors: [AUTHORS['Federica'], AUTHORS['me'], AUTHORS['Anna'], AUTHORS['Stefano'], AUTHORS['Enoch']],
    key: 'Bogo2012',
    title: 'Psoriasis segmentation through chromatic regions and Geometric Active Contours',
    venue: 'EMBC',
    year: 2012,
    link: 'dx.doi.com/10.1109/EMBC.2012.6347212',
    description: 'A novel computational approach to discerning lesional from healthy skin in full-body images of patients with psoriasis.',
    bibtex: '@article{Bogo2012,\n' +
      'author = {Bogo, Federica and Samory, Mattia and {Belloni Fortina}, Anna and Piaserico, Stefano and Peserico, Enoch},\n' +
      'doi = {https://doi.org/10.1109/EMBC.2012.6347212},\n' +
      'isbn = {9781424441198},\n' +
      'issn = {1557170X},\n' +
      'journal = {Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS \'12},\n' +
      'pages = {5388--5391},\n' +
      'pmid = {23367147},\n' +
      'title = {{Psoriasis segmentation through chromatic regions and Geometric Active Contours}},\n' +
      'year = {2012}\n' +
      '}\n',
    formatted: 'Bogo, F., Samory, M., Belloni Fortina, A., Piaserico, S., & Peserico, E. (2012). Psoriasis segmentation through chromatic regions and Geometric Active Contours. Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS ’12, 5388–5391. https://doi.org/10.1109/EMBC.2012.6347212'
  },

  {
    authors: [AUTHORS['me'], AUTHORS['Vartan'], AUTHORS['Tanu']],
    key: 'Samory2020',
    title: 'Characterizing the Social Media News Sphere through User Co-Sharing Practices',
    venue: 'ICWSM',
    year: 2020,
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/7327',
    description: 'We characterize the landscape of news sources based on their audience on Twitter. News sources aggregate in communities of shared audience, that uphold distinct factuality standards, political partisanship, and journalistic norms.',
    bibtex: '@inproceedings{Samory2020,\n' +
      'author = {Samory, Mattia and Abnousi, Vartan Kesiz and Mitra, Tanushree},\n' +
      'booktitle = {Proceedings of the 14th International AAAI Conference on Web and Social Media},\n' +
      'title = {{Characterizing the Social Media News Sphere through User Co-Sharing Practices}},\n' +
      'year = {2020}\n' +
      '}\n',
    formatted: 'Samory, M., Abnousi, V. K., & Mitra, T. (2020). Characterizing the Social Media News Sphere through User Co-Sharing Practices. Proceedings of the 14th International AAAI Conference on Web and Social Media. Retrieved from https://ojs.aaai.org/index.php/ICWSM/article/view/7327'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Cinzia'], AUTHORS['Enoch']],
    key: 'Samory2017',
    title: 'How User Condition Affects Community Dynamics in a Forum on Autism',
    venue: 'ICWSM',
    year: 2017,
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/14890',
    description: 'description',
    bibtex: '@inproceedings{Samory2017,\n' +
      '  author = {Samory, Mattia and Pizzi, Cinzia and Peserico, Enoch},\n' +
      '  booktitle = {Proceedings of the 11Tth International AAAI Conference on Web and Social Media - ICWSM \'17},\n' +
      'title = {{How User Condition Affects Community Dynamics in a Forum on Autism}},\n' +
      'year = {2017}\n' +
      '}\n',
    formatted: 'Samory, M., Pizzi, C., & Peserico, E. (2017). How User Condition Affects Community Dynamics in a Forum on Autism. Proceedings of the 11Tth International AAAI Conference on Web and Social Media - ICWSM ’17. Retrieved from https://ojs.aaai.org/index.php/ICWSM/article/view/14890'
  },
  {
    authors: [AUTHORS['Indira'], AUTHORS['me'], AUTHORS['Fabian'], AUTHORS['Claudia'], AUTHORS['Isabelle']],
    key: 'Sen2021',
    title: 'How Does Counterfactually Augmented Data Impact Models for Social Computing Constructs?',
    venue: 'EMNLP',
    year: 2021,
    link: 'http://arxiv.org/abs/2109.07022',
    description: 'Leveraging a novel typology of CAD to analyze their relationship with model performance, we find that CAD which acts on the construct directly or a diverse set of CAD leads to higher performance.',
    bibtex: '@inproceedings{Sen2021,\n' +
      '  archivePrefix = {arXiv},\n' +
      '  arxivId = {2109.07022},\n' +
      '  author = {Sen, Indira and Samory, Mattia and Floeck, Fabian and Wagner, Claudia and Augenstein, Isabelle},\n' +
      '  booktitle = {Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing},\n' +
      '  eprint = {2109.07022},\n' +
      'title = {{How Does Counterfactually Augmented Data Impact Models for Social Computing Constructs?}},\n' +
      'url = {http://arxiv.org/abs/2109.07022},\n' +
      '    year = {2021}\n' +
      '}\n',
    formatted: 'Sen, I., Samory, M., Floeck, F., Wagner, C., & Augenstein, I. (2021). How Does Counterfactually Augmented Data Impact Models for Social Computing Constructs? Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing. Retrieved from http://arxiv.org/abs/2109.07022'
  },
  {
    authors: [AUTHORS['Eshwar'], AUTHORS['me'], AUTHORS['Shagun'], AUTHORS['Hunter'], AUTHORS['Amy'], AUTHORS['Cliff'], AUTHORS['Jacob'], AUTHORS['Eric']],
    key: 'Chandrasekharan2018',
    title: 'The Internet\'s Hidden Rules: An Empirical Study of Reddit Norm Violations at Micro, Meso, and Macro Scales',
    venue: 'CSCW',
    year: 2018,
    link: 'https://dl.acm.org/doi/10.1145/3274301',
    description: 'Via 2.8M comments removed by moderators, we use computational and qualitative methods to identify three types of norms: macro norms that are universal to most parts of Reddit; meso norms that are shared across certain groups of subreddits; and micro norms that are specifc to individual, relatively unique subreddits.',
    bibtex: '@article{Chandrasekharan2018,\n' +
      '  author = {Chandrasekharan, Eshwar and Samory, Mattia and Jhaver, Shagun and Charvat, Hunter and Bruckman, Amy and Lampe, Cliff and Eisenstein, Jacob and Gilbert, Eric},\n' +
      '  journal = {Proceedings of the ACM on Human-Computer Interaction},\n' +
      'title = {{The Internet\'s Hidden Rules: An Empirical Study of Reddit Norm Violations at Micro, Meso, and Macro Scales}},\n' +
      '  volume = {CSCW},\n' +
      '    year = {2018}\n' +
      '}\n',
    formatted: 'Chandrasekharan, E., Samory, M., Jhaver, S., Charvat, H., Bruckman, A., Lampe, C., … Gilbert, E. (2018). The Internet’s Hidden Rules: An Empirical Study of Reddit Norm Violations at Micro, Meso, and Macro Scales. Proceedings of the ACM on Human-Computer Interaction, CSCW. Retrieved from https://dl.acm.org/doi/10.1145/3274301'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Enoch']],
    key: 'Samory2015',
    title: 'Quotes in forum.rpg.net',
    venue: 'WebSci',
    year: 2015,
    link: 'https://dl.acm.org/doi/10.1145/2786451.2786928',
    description: 'The graph that connects forum users through the quotes they exchange with one another shows properties typical of a social network.',
    bibtex: '@inproceedings{Samory2015,\n' +
      '  author = {Samory, Mattia and Peserico, Enoch},\n' +
      '  booktitle = {Proceedings of the ACM Conference on Web Science - WebSci \'15},\n' +
      '    doi = {10.1145/2786451.2786928},\n' +
      'isbn = {9781450336727},\n' +
      '  pages = {1--2},\n' +
      '  title = {{Quotes in forum.rpg.net}},\n' +
      'url = {http://dl.acm.org/citation.cfm?doid=2786451.2786928},\n' +
      '    year = {2015}\n' +
      '}\n',
    formatted: 'Samory, M., & Peserico, E. (2015). Quotes in forum.rpg.net. Proceedings of the ACM Conference on Web Science - WebSci ’15, 1–2. https://doi.org/10.1145/2786451.2786928'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Vic'], AUTHORS['Enoch']],
    key: 'Samory2017',
    title: 'Quotes Reveal Community Structure and Interaction Dynamics',
    venue: 'CSCW',
    year: 2017,
    link: 'http://dl.acm.org/citation.cfm?doid=2998181.2998359',
    description: 'Quotes are not only a dialectic device: they signal acknowledgement, attribution, and endorsement. This work leverages quotes to characterize users, relationships, and community structure that are implicit in online forums.',
    bibtex: '@inproceedings{Samory2017,\n' +
      '  address = {New York, New York, USA},\n' +
      '  author = {Samory, Mattia and Cappelleri, Vincenzo-Maria and Peserico, Enoch},\n' +
      '  booktitle = {Proceedings of the 2017 ACM Conference on Computer Supported Cooperative Work and Social Computing - CSCW \'17},\n' +
      '    doi = {10.1145/2998181.2998359},\n' +
      'isbn = {9781450343350},\n' +
      '  pages = {322--335},\n' +
      '  publisher = {ACM Press},\n' +
      '  title = {{Quotes Reveal Community Structure and Interaction Dynamics}},\n' +
      'url = {http://dl.acm.org/citation.cfm?doid=2998181.2998359},\n' +
      '    year = {2017}\n' +
      '}\n',
    formatted: 'Samory, M., Cappelleri, V.-M., & Peserico, E. (2017). Quotes Reveal Community Structure and Interaction Dynamics. Proceedings of the 2017 ACM Conference on Computer Supported Cooperative Work and Social Computing - CSCW ’17, 322–335. https://doi.org/10.1145/2998181.2998359'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Marcella'], AUTHORS['Sergio'], AUTHORS['Enoch']],
    key: 'Samory2014',
    title: 'The Counterpoint Game: Rules, Constraints and Computational Spaces',
    venue: 'ICMC',
    year: 2014,
    link: 'https://speech.di.uoa.gr/ICMC-SMC-2014/images/VOL_2/1126.pdf',
    description: 'First species counterpoint is supposedly governed by a well-defined set of rules. This work performs a comparative analysis of the literature, gives a formal definition of the rules, and algorithmically discovers a set of cantus firmi that do not allow valid counterpoint.',
    bibtex: '@inproceedings{Samory2014,\n' +
      '  author = {Samory, Mattia and Mandanici, Marcella and Canazza, Sergio and Peserico, Enoch},\n' +
      '  booktitle = {Proceedings of the Joint International Computer Music Conference and Sound and Music Computing - ICMC/SMC \'14},\n' +
      '  title = {{The Counterpoint Game: Rules, Constraints and Computational Spaces}},\n' +
      'year = {2014}\n' +
      '}\n',
    formatted: 'Samory, M., Mandanici, M., Canazza, S., & Peserico, E. (2014). The Counterpoint Game: Rules, Constraints and Computational Spaces. Proceedings of the Joint International Computer Music Conference and Sound and Music Computing - ICMC/SMC ’14. Retrieved from https://speech.di.uoa.gr/ICMC-SMC-2014/images/VOL_2/1126.pdf'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Enoch']],
    key: 'Samory2016a',
    title: 'Content attribution ignoring content',
    venue: 'WebSci',
    year: 2016,
    link: 'https://dl.acm.org/doi/10.1145/2908131.2908156',
    description: 'Can we tell who is the author of a message, without looking at its content? This work evaluates content-agnostic features for authorship analysis.',
    bibtex: '@inproceedings{Samory2016a,\n' +
      '  author = {Samory, Mattia and Peserico, Enoch},\n' +
      '  booktitle = {Proceedings of the 8th ACM Conference on Web Science - WebSci \'16},\n' +
      '    doi = {10.1145/2908131.2908156},\n' +
      'isbn = {9781450342087},\n' +
      '  pages = {233--243},\n' +
      '  title = {{Content attribution ignoring content}},\n' +
      'url = {http://dl.acm.org/citation.cfm?doid=2908131.2908156},\n' +
      '    year = {2016}\n' +
      '}\n',
    formatted: 'Samory, M., & Peserico, E. (2016). Content attribution ignoring content. Proceedings of the 8th ACM Conference on Web Science - WebSci ’16, 233–243. https://doi.org/10.1145/2908131.2908156'
  },
  {
    authors: [AUTHORS['me']],
    key: 'Samory2021',
    title: 'On Positive Moderation Decisions',
    venue: 'ICWSM',
    year: 2021,
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/18086',
    description: 'This work analyzes moderator-approved content from 49 Reddit communities. It sheds light on the complexity of moderation by giving empirical evidence that the difference between approved and removed content is often subtle.',
    bibtex: '@inproceedings{Samory2021,\n' +
      '  author = {Samory, Mattia},\n' +
      '  booktitle = {Proceedings of the 15th International AAAI Conference on Web and Social Media},\n' +
      'title = {{On Positive Moderation Decisions}},\n' +
      'year = {2021}\n' +
      '}\n',
    formatted: 'Samory, M. (2021). On Positive Moderation Decisions. Proceedings of the 15th International AAAI Conference on Web and Social Media. Retrieved from https://ojs.aaai.org/index.php/ICWSM/article/view/18086'
  },
  {
    authors: [AUTHORS['Shruti'], AUTHORS['me'], AUTHORS['Tanu']],
    key: 'Phadke2020',
    title: 'What Makes People Join Conspiracy Communities ?: Role of Social Factors in Conspiracy Engagement',
    venue: 'CSCW',
    year: 2020,
    link: 'https://dl.acm.org/doi/abs/10.1145/3432922',
    description: 'We find that social factors like interactions with current members of the conspiracy communities and marginalization outside of the conspiracy communities, are the most important social precursors to conspiracy joining---even outperforming individual factor baselines.',
    bibtex: '@article{Phadke2020,\n' +
      '  author = {Phadke, Shruti and Samory, Mattia and Mitra, Tanushree},\n' +
      'journal = {Proceedings of the ACM on Human-Computer Interaction},\n' +
      '  title = {{What Makes People Join Conspiracy Communities ?: Role of Social Factors in Conspiracy Engagement}},\n' +
      'volume = {CSCW},\n' +
      '  year = {2020}\n' +
      '}\n',
    award: 'Best Paper Honorable Mention',
    press: ['site1', 'site2'],
    formatted: 'Phadke, S., Samory, M., & Mitra, T. (2020). What Makes People Join Conspiracy Communities ?: Role of Social Factors in Conspiracy Engagement. Proceedings of the ACM on Human-Computer Interaction, CSCW. Retrieved from https://dl.acm.org/doi/abs/10.1145/3432922'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Enoch']],
    key: 'Samory2017a',
    title: 'Sizing Up the Troll: A Quantitative Characterization of Moderator-Identified Trolling in an Online Forum',
    venue: 'CHI',
    year: 2017,
    link: 'https://dl.acm.org/doi/10.1145/3025453.3026007',
    description: 'Qualitative research highlights the importance of differentiating trolling from other forms of abuse. Quantitative research, however, mostly ignores this distinction. This work quantitatively analyzes trolling, as defined by human mods.',
    bibtex: '@inproceedings{Samory2017a,\n' +
      '  author = {Samory, Mattia and Peserico, Enoch},\n' +
      '  booktitle = {Proceedings of the SIGCHI Conference on Human Factors in Computing Systems - CHI \'17},\n' +
      '    doi = {10.1145/3025453.3026007},\n' +
      'isbn = {9781450346559},\n' +
      '  title = {{Sizing Up the Troll: A Quantitative Characterization of Moderator-Identified Trolling in an Online Forum}},\n' +
      'year = {2017}\n' +
      '}\n',
    formatted: 'Samory, M., & Peserico, E. (2017). Sizing Up the Troll: A Quantitative Characterization of Moderator-Identified Trolling in an Online Forum. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems - CHI ’17. https://doi.org/10.1145/3025453.3026007'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Tanu']],
    key: 'Samory2018',
    title: 'Conspiracies Online: User Discussions in a Conspiracy Community Following Dramatic Events',
    venue: 'ICWSM',
    year: 2018,
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/15039',
    description: 'New conspiracy theories emerge in the aftermath of dramatic events to offer alternative explanations of the facts. This work examines who participates in conspiracy theory discussions on social media and how they react to four dramatic events.',
    bibtex: '@inproceedings{Samory2018,\n' +
      '  author = {Samory, Mattia and Mitra, Tanushree},\n' +
      '  booktitle = {Proceedings of the 12th International AAAI Conference on Web and Social Media - ICWSM \'18},\n' +
      '  title = {{Conspiracies Online: User Discussions in a Conspiracy Community Following Dramatic Events}},\n' +
      'year = {2018}\n' +
      '}\n',
    formatted: 'Samory, M., & Mitra, T. (2018). Conspiracies Online: User Discussions in a Conspiracy Community Following Dramatic Events. Proceedings of the 12th International AAAI Conference on Web and Social Media - ICWSM ’18. Retrieved from https://ojs.aaai.org/index.php/ICWSM/article/view/15039'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Indira'], AUTHORS['Julian'], AUTHORS['Fabian'], AUTHORS['Claudia']],
    key: 'Samory2021a',
    title: '"Call me sexist, but...": Revisiting Sexism Detection Using Psychological Scales and Adversarial Samples',
    venue: 'ICWSM',
    year: 2021,
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/18085',
    description: 'We derive a multidimensional codebook and gold-standard dataset of sexist expressions using items from psychological scales of sexism. Using conuterfactual data augmentation, we explore how computational models of sexism can better identify the construct in social media posts.',
    bibtex: '@inproceedings{Samory2021a,\n' +
      'archivePrefix = {arXiv},\n' +
      'arxivId = {2004.12764},\n' +
      'author = {Samory, Mattia and Sen, Indira and Kohne, Julian and Floeck, Fabian and Wagner, Claudia},\n' +
      'booktitle = {Proceedings of the 15th International AAAI Conference on Web and Social Media},\n' +
      'eprint = {2004.12764},\n' +
      'title = {{"Call me sexist, but...": Revisiting Sexism Detection Using Psychological Scales and Adversarial Samples}},\n' +
      'url = {https://ojs.aaai.org/index.php/ICWSM/article/view/18085},\n' +
      'year = {2021}\n' +
      '}\n',
    press: ['site1', 'site2'],
    formatted: 'Samory, M., Sen, I., Kohne, J., Floeck, F., & Wagner, C. (2021). “Call me sexist, but...”: Revisiting Sexism Detection Using Psychological Scales and Adversarial Samples. Proceedings of the 15th International AAAI Conference on Web and Social Media. Retrieved from https://ojs.aaai.org/index.php/ICWSM/article/view/18085'
  },
  {
    authors: [AUTHORS['Eshwar'], AUTHORS['me'], AUTHORS['Anirudh'], AUTHORS['Eric']],
    key: 'Chandrasekharan2017',
    title: 'The Bag of Communities Approach: Identifying Abusive Behavior Online with Preexisting Internet Data',
    venue: 'CHI',
    year: 2017,
    link: 'https://dl.acm.org/doi/10.1145/3025453.3026018',
    description: 'Supervised learning approaches to moderation face dearth of ground-truth annotated data. This paper proposes a way of leveraging unannotated, readily available data from multiple communities to bootstrap moderation classifiers.',
    bibtex: '@inproceedings{Chandrasekharan2017,\n' +
      '  author = {Chandrasekharan, Eshwar and Samory, Mattia and Srinivasan, Anirudh and Gilbert, Eric},\n' +
      '  booktitle = {Proceedings of the SIGCHI Conference on Human Factors in Computing Systems - CHI \'17},\n' +
      '    doi = {10.1145/3025453.3026018},\n' +
      'isbn = {9781450346559},\n' +
      '  title = {{The Bag of Communities Approach: Identifying Abusive Behavior Online with Preexisting Internet Data}},\n' +
      'year = {2017}\n' +
      '}\n',
    formatted: 'Chandrasekharan, E., Samory, M., Srinivasan, A., & Gilbert, E. (2017). The Bag of Communities Approach: Identifying Abusive Behavior Online with Preexisting Internet Data. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems - CHI ’17. https://doi.org/10.1145/3025453.3026018'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Federica'], AUTHORS['Enoch']],
    key: 'Samory2016',
    title: 'Community structure and interaction dynamics through the lens of quotes',
    venue: 'WebSci',
    year: 2016,
    link: 'http://dl.acm.org/citation.cfm?doid=2908131.2908195',
    description: 'This work builds upon results from [WebSci15], extending them to four online forums of different size, topic, and language. Quotes not only help navigate long discussions, they also reflect aspects of the forum community.',
    bibtex: '@inproceedings{Samory2016,\n' +
      '    archivePrefix = {arXiv},\n' +
      '    arxivId = {1604.04570},\n' +
      '    author = {Samory, Mattia and Bogo, Federica and Peserico, Enoch},\n' +
      '    booktitle = {Proceedings of the 8th ACM Conference on Web Science - WebSci \'16},\n' +
      '      doi = {10.1145/2908131.2908195},\n' +
      '    eprint = {1604.04570},\n' +
      '    isbn = {9781450342087},\n' +
      '    pages = {358--359},\n' +
      '    title = {{Community structure and interaction dynamics through the lens of quotes}},\n' +
      'url = {http://dl.acm.org/citation.cfm?doid=2908131.2908195},\n' +
      '    year = {2016}\n' +
      '}\n',
    formatted: 'Samory, M., Bogo, F., & Peserico, E. (2016). Community structure and interaction dynamics through the lens of quotes. Proceedings of the 8th ACM Conference on Web Science - WebSci ’16, 358–359. https://doi.org/10.1145/2908131.2908195'
  },
  {
    authors: [AUTHORS['Shruti'], AUTHORS['me'], AUTHORS['Tanu']],
    key: 'Phadke2021',
    title: 'Characterizing Social Imaginaries and Self-Disclosures of Dissonance in Online Conspiracy Discussion Communities',
    venue: 'CSCW',
    year: 2021,
    link: 'https://dl.acm.org/doi/10.1145/3479855',
    description: 'We use the social imaginaries established by Q on chanboards to create a computational framework for distinguishing belief and dissonance in QAnon subreddits. Our measure of dissonance correlates with lower engagement and departure from the communities.',
    bibtex: '@article{Phadke2021,\n' +
      '  archivePrefix = {arXiv},\n' +
      '  arxivId = {2107.10204},\n' +
      '  author = {Phadke, Shruti and Samory, Mattia and Mitra, Tanushree},\n' +
      '  eprint = {2107.10204},\n' +
      'journal = {Proceedings of the ACM on Human-Computer Interaction},\n' +
      '  month = {jul},\n' +
      '  number = {CSCW},\n' +
      '  title = {{Characterizing Social Imaginaries and Self-Disclosures of Dissonance in Online Conspiracy Discussion Communities}},\n' +
      'url = {http://arxiv.org/abs/2107.10204},\n' +
      '    volume = {5},\n' +
      '  year = {2021}\n' +
      '}\n',
    award: 'Best Paper Honorable Mention',
    press: ['site1', 'site2'],
    formatted: 'Phadke, S., Samory, M., & Mitra, T. (2021). Characterizing Social Imaginaries and Self-Disclosures of Dissonance in Online Conspiracy Discussion Communities. Proceedings of the ACM on Human-Computer Interaction, 5(CSCW). Retrieved from http://arxiv.org/abs/2107.10204'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Tanu']],
    key: 'Samory2018b',
    title: '“The Government Spies Using Our Webcams”: The Language of Conspiracy Theories in Online Discussions',
    venue: 'CSCW',
    year: 2018,
    link: 'https://dl.acm.org/doi/10.1145/3274421',
    description: 'What do users talk about when they discuss conspiracy theories online? What are the recurring elements in their discussions? What do these elements tell us about the way users think? This work offers a scalable method to answer these questions.',
    bibtex: '@article{Samory2018b,\n' +
      '  author = {Samory, Mattia and Mitra, Tanushree},\n' +
      'journal = {Proceedings of the ACM on Human-Computer Interaction},\n' +
      '  title = {{“The Government Spies Using Our Webcams”: The Language of Conspiracy Theories in Online Discussions}},\n' +
      'volume = {CSCW},\n' +
      '  year = {2018}\n' +
      '}\n',
    press: ['site1', 'site2'],
    formatted: 'Samory, M., & Mitra, T. (2018). “The Government Spies Using Our Webcams”: The Language of Conspiracy Theories in Online Discussions. Proceedings of the ACM on Human-Computer Interaction, CSCW. Retrieved from https://dl.acm.org/doi/10.1145/3274421'
  },
  {
    authors: [AUTHORS['me'], AUTHORS['Tanu']],
    key: 'Samory2019',
    title: 'SENPAI: Supporting Exploratory Text Analysis through Semantic & Syntactic Pattern Inspection',
    venue: 'ICWSM',
    year: 2019,
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/3243',
    description: 'We introduce SENPAI, a novel tool that discovers combined semantic and syntactic patterns fusing neural embeddings, dependency parsing, and graph mining to surface patterns directly from data.',
    bibtex: '@inproceedings{Samory2019,\n' +
      '  author = {Samory, Mattia and Mitra, Tanushree},\n' +
      '  booktitle = {Proceedings of the 14th International AAAI Conference on Web and Social Media},\n' +
      'title = {{SENPAI: Supporting Exploratory Text Analysis through Semantic & Syntactic Pattern Inspection}},\n' +
      'year = {2019}\n' +
      '}\n',
    formatted: 'Samory, M., & Mitra, T. (2019). SENPAI: Supporting Exploratory Text Analysis through Semantic & Syntactic Pattern Inspection. Proceedings of the 14th International AAAI Conference on Web and Social Media. Retrieved from https://ojs.aaai.org/index.php/ICWSM/article/view/3243'
  },
  {
    authors: [AUTHORS['Shruti'], AUTHORS['me'], AUTHORS['Jonathan'], AUTHORS['James'], AUTHORS['Tanu']],
    key: 'Phadke2018',
    title: 'Framing Hate with Hate Frames: Designing the Codebook',
    venue: 'CSCW',
    year: 2018,
    link: 'https://dl.acm.org/doi/10.1145/3272973.3274055',
    description: 'The “Hate Frames Codebook”, a hand-coding scheme, offers a two-fold outlook on hateful communications: Collective Action frames analyze how hate groups problematize their targets, while Propaganda Device frames highlight their communication strategies.',
    bibtex: '@article{Phadke2018,\n' +
      '  author = {Phadke, Shruti and Lloyd, Jonathan and Hawdon, James and Samory, Mattia and Mitra, Tanushree},\n' +
      'journal = {Proceedings of the ACM Extended Abstracts},\n' +
      '  title = {{Framing Hate with Hate Frames: Designing the Codebook}},\n' +
      'volume = {(CSCW)},\n' +
      'year = {2018}\n' +
      '}\n',
    formatted: 'Phadke, S., Lloyd, J., Hawdon, J., Samory, M., & Mitra, T. (2018). Framing Hate with Hate Frames: Designing the Codebook. Proceedings of the ACM Extended Abstracts, (CSCW). Retrieved from https://dl.acm.org/doi/10.1145/3272973.3274055'
  },
]

