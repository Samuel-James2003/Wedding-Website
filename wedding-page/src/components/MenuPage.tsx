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

import { AppPaths } from "../utils/AppPaths";

const MenuPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${AppPaths.imageUrl("./images/site-bg.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: 4,
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Menu
          </Typography>

          {[
            {
              title: "Apps",
              items: [
                "Mini Grilled Cheese with Duck",
                "Mini Quiche",
                "Heirloom Tomato Bruschetta with Fresh Basil and Balsamic Glaze",
                "Spanakopita",
                "Charcuterie & Crudité Board",
              ],
            },
            {
              title: "Entrees",
              items: [
                "Grilled Atlantic Salmon with Mango Salsa (GF)",
                "Chicken Picatta (GF)",
                "Penne alla Vodka with Fresh Basil and Grated Parmesan",
              ],
            },
            {
              title: "Sides",
              items: [
                "Grilled Asparagus with Lemon Zest and Herbs (GF)",
                "Signature Salad with Balsamic Vinaigrette",
                "Roasted Fingerling Potatoes",
                "Summer grilled vegetables",
                "Sauteed Broccoli Rabe with Garlic and Sausage",
                "Fresh Baked Bread Rolls and Focaccia with Herb Butter",
              ],
            },
            {
              title: "Dessert",
              items: ["Lemon Cake with Raspberry Filling", "Espresso Bar with Assorted Pastries"],
            },
            { title: "Beverages", items: ["Coffee", "Tea", "Soft Drinks", "Wine", "Beer", "Select Liquors"] },
          ].map((section, idx) => (
            <Box key={section.title} my={3} width="100%">
              {idx > 0 && <Divider />}
              <Typography variant="h5" mt={idx > 0 ? 3 : 0} align="center">
                {section.title}
              </Typography>
              <List>
                {section.items.map((item) => (
                  <ListItem key={item} sx={{ justifyContent: "center" }}>
                    <ListItemText primary={item} sx={{ textAlign: "center" }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default MenuPage;
