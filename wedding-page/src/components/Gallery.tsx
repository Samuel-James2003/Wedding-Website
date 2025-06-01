import * as React from "react";
import {
  Paper,
  Box,
  Container,
  ImageList,
  ImageListItem,
  Modal,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

interface FadeProps {
  children: React.ReactElement<any>;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}
const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });
  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const Gallery: React.FC = () => {
  // State to hold the currently “zoomed” image URL (or null if none)
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={4}
        sx={{
          p: 4,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          maxHeight: 600,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            flexGrow: 1, // stretch to fill remaining Paper height
            overflowY: "auto", // scroll only if content is too tall
          }}
        >
          <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "100%" }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer", // indicate it’s clickable
                  }}
                  onClick={() => {
                    setSelectedImg(item.img);
                    setOpen(true);
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Paper>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
        closeAfterTransition
        >
        <Fade
          in={open}
          onExited={() => {
            // once fade→0 is done, actually remove the image from state
            setSelectedImg(null);
          }}
        >
          <Box
            onClick={handleClose}
            sx={{
              position: "absolute" as const,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              outline: "none",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <img
              srcSet={selectedImg! + "?w=248&fit=crop&auto=format&dpr=2 2x"}
              alt="Enlarged"
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 4,
                boxShadow: "0px 4px 24px rgb(0, 0, 0)",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

const itemData = [
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczOBZMAe_vmdlfswG8ZJ0eG2D80aijXRO5wfPfcmewNiV3kFUA0yTcL0Q-cR34C3TWFTfeGuL3eQt3JshC_XAaFVSws1DlRRSK9FeDbVVnBYndnuab15Y9fG1nl9RlieSMnkZPyOTgu91mAFzlod_CtmrQ=w902-h1251-s-no-gm?authuser=0",
    title: "Buccees",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczPHsWY3M1F1Eh_z_uCKE8zrXfRewYMR2XgL9xs8uVQzG4fH1V4UF1guhaVUN_wVI1A2GbTWocQjKkPbSBRbQlDYvjrIvGIxs6_owYwWFDeL73DuGsiFb_NdcqzzdyMEYyOgZVrpx25-Tsor5SzEe5tP4Q=w942-h1251-s-no-gm?authuser=0",
    title: "Kenough",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczOyONsiymrUehm8XNtwWddKClJ50MqEaGnCsl_10N07I-wb26kFBIO8AJSdS3Il5Aw1rgdYfsiy2vNC906D9kvTuPogH5uXiWOsQke3hPBjnZebXEfYa3ddduRENnyYcGnCCWkajH1O1pQAzJvXqXoR8Q=w1667-h1251-s-no-gm?authuser=0",
    title: "Sinners",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczMEAn0Y3wUoN3Cur9KMS6bKrjD1uV5sxWC-XTZy12U0BKiAIuw5gJR3n-8qRQwaGxn7JdusLsf_nensDLBSNw7o9LIhjg8rCUkDagjnLFfbRgaUoilnCXuZKuRp-mQ2netYoNVE31ImyNZpYtkHkpp4Vg=w1665-h1251-s-no-gm?authuser=0",
    title: "Trail",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczMNSIYpGWjs9XFJxgJ9H-jQao45mfUZu8bMIym1DYOn7LPC4ZZ3Sly6yCZdNPbKdtfodFwmDKYEB2FE9GlSPJYXbC1OCQdNor1aYwIMFtFg5Y0mdTBevFQvkiV1XhoGrUnt12ByNr1OC_yIAgebweYpgg=w1668-h1251-s-no-gm?authuser=0",
    title: "Bwaston",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczOopI9xQTX7n3lkqYNYHO-Rn1lbLxpar5bWSbTmSdBmS0N9pPEyE5-BqMB3WDGXOLoEJLRUwSynOAbf2tKGfQierbupa8mjtThekRGlk9m5j6Rmp5wO6Z-X0tvehTGDtwf-aNjzy503-DKzdpo77wtArA=w939-h1251-s-no-gm?authuser=0",
    title: "Red tree",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczN_fKcbXdwB4nVGgNEudG7_pXds1Cax8IH5CwzMJWEamI05jSG_geeFypjLMSg4_n1dYI48pKvAY94PBoIZQAS88PTYY3LMUm10EqYqSygrZ52HmpAWF5dzLSO7rFnkz1tRKM9ozbcWd7es22ImZu8ceg=w939-h1251-s-no-gm?authuser=0",
    title: "Can I suck the soy sauce",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczNaK50cwLvNRBFLomQZTlwRDhG8HU3eK5QcWbz1_IgKrC6lRazj2MMg8yKN0Mlr4RTQ6uvGGVY648eSnPo-RO3F3pIeamT80gV6r_GnGAZ_cIJMLfcMhPOhO909ok6MhV6kvcHfEnCjpezzxxZM-ryWbQ=w942-h1251-s-no-gm?authuser=0",
    title: "Elevator",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczN3Wsc_CpTbbjuulz2Y-DdnVW_JaehQSGK2-t8C-fX70WwXRkRzxmZFwUDYiknJjHBbwm56iKNA0AaZyxag_PwbvZwFZnvmNZOAVVH7HpsGX9H75-ru1TXJ6lSMXAKNl5rPqCguFQtYXqwT8h_gpw3qSw=w939-h1251-s-no-gm?authuser=0",
    title: "Brussels",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AP1GczOXl2tqB4tZYIAop2d6HMdA8ts42N4SZFZ51sX5PcOU_N88QlBuKvwg5VOd7lo6zzDwkYJ_WoGcW0TNZc2dImEmzUXpxk4Qv9nQ-Ob7r6IFXW2nN5w6_Zhzvvdgib3Z3dS0ntWPo8WSz05h0z-VpU0GFQ=w939-h1251-s-no-gm?authuser=0",
    title: "Cupcake",
  },
];

export default Gallery;
