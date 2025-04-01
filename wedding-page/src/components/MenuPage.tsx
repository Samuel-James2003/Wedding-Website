import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Box,
} from "@mui/material";

const MenuPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          backgroundImage: 'url("/images/menu-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Menu
          </Typography>

          {[
            { title: "Apps", items: [
              "Mini grilled cheese with duck",
              "Mini quiche",
              "Salmon canape",
              "Spanakopita",
              "Charcuterie & Crudité board",
            ]},
            { title: "Salad", items: ["House Salad"] },
            { title: "Pasta Course", items: ["Penne alla vodka"] },
            { title: "Entrees", items: ["Grilled Salmon", "Chicken marsala"] },
            { title: "Sides", items: ["Roasted Rosemary potatoes", "Asparagus"] },
            { title: "Dessert", items: [
              "Cake (our own)",
              "Cookies (our own)",
              "Espresso",
              "Coffee decaf",
            ]},
          ].map((section, idx) => (
            <Box key={section.title} my={3} width="100%">
              {idx > 0 && <Divider />}
              <Typography variant="h5" mt={idx > 0 ? 3 : 0}>{section.title}</Typography>
              <List>
                {section.items.map((item) => (
                  <ListItem key={item} sx={{ justifyContent: "center" }}>
                    <ListItemText primary={item} sx={{ textAlign: "center" }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default MenuPage;
