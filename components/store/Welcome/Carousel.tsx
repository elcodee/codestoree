import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      {/* <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div> */}
      {/* <Button variant="dark" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}

const data = [
  {
    image:
      'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/11/06/3504610686.jpeg',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://occ-0-1642-1168.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABdTUEeoy5aQEQS4EKsme1qmWoxhsJhMTmixPyDZqyBashyLCK9oUHaCN-0aF8QHsJb6Bj_rAZdUIm9wOVKt0NTn-t2zOuGFOYoobd13EeslrLgbAZhFYawT_kEDIKF8aE_1TIg.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://cinemags.org/wp-content/uploads/2022/07/The-School-for-Good-and-Evil-poster.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BODRiYzI4ZWItNDRmOS00MWVmLWFmZGQtZGJlMjY4YjE3NGIzXkEyXkFqcGdeQXVyODAzMTg2NzU@._V1_FMjpg_UX1000_.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  }
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 1 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      style={{ marginTop: -80, marginBottom: -70 }}
    >
      {slides}
    </Carousel>
  );
}