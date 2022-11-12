import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
} from "@mantine/core";
import {
  IconBrandNetflix,
  IconDeviceGamepad,
  IconUserPlus,
} from "@tabler/icons";
import Link from "next/link";
import Swal from "sweetalert2";

const mockdata = [
  {
    title: "Netflix",
    icon: IconBrandNetflix,
    color: "red",
    link: "/buy/netflix",
  },
  { title: "Diamond ML", icon: IconDeviceGamepad, color: "indigo", link: "" },
  // { title: "Follow Us", icon: IconUserPlus, color: "blue", link: "/" },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme !== "light"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: "black",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    color: "black",
    backgroundColor:
      theme.colorScheme !== "light" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export default function CardDefault() {
  const { classes, theme } = useStyles();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const items = mockdata.map((item) => {
    if(!item.link){
      return(
      <Link href={item.link}>
        <UnstyledButton key={item.title} className={classes.item} onClick={
          () => Toast.fire({
  icon: 'warning',
  title: 'Produk Kosong'
})}>
          {/* <a className="flex w-auto pb-4">{item.title}</a> */}
          <item.icon color={theme.colors[item.color][6]} size={32} />
          <Text size="xs" mt={7}>
            {item.title}
          </Text>
        </UnstyledButton>
      </Link>
    ) 
    } else {
      return(
        <Link href={item.link}>
          <UnstyledButton key={item.title} className={classes.item}>
            {/* <a className="flex w-auto pb-4">{item.title}</a> */}
            <item.icon color={theme.colors[item.color][6]} size={32} />
            <Text size="xs" mt={7}>
              {item.title}
            </Text>
          </UnstyledButton>
        </Link>
      ) 
    }
});

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Menu</Text>
        {/* <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor> */}
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
