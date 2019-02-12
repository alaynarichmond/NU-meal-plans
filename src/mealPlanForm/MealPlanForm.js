import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';




const MealPlanForm = ({ mealPlan, onMealPlanSelect, view, onViewChange, 
  onSubmit, onWeekdayChange, onWeekendChange, onWeeklyChange }) => {
    return (
        <Card raised>
            <form>
                <Select value={mealPlan} onChange={(event) => onMealPlanSelect(event.target.value)}>
                    <MenuItem value='OPEN_ACCESS'>Open Access</MenuItem>
                    <MenuItem value='FLEX_330'>Flex 330</MenuItem>
                    <MenuItem value='BASE_14'>Base 14</MenuItem>
                    <MenuItem value='PURPLE_5050'>Purple 50/50</MenuItem>
                </Select>
            </form>
            <Tabs centered value={view} onChange={(event,value) => onViewChange(value)}>
              <Tab value='DAILY' label='Daily'></Tab>
              <Tab value='WEEKLY' label='Weekly'></Tab>
            </Tabs>
            {view ==='DAILY' &&
            <div>Daily view
              <Typography>Weekday</Typography>
              <TextField onChange={(event) => onWeekdayChange(event.target.value)}>

              </TextField>
              <Typography>Weekend</Typography>
              <TextField onChange={(event) => onWeekendChange(event.target.value)}>

              </TextField>
            </div>}
            {view === 'WEEKLY' &&
            <div>
              <Typography>Total</Typography>
              <TextField onChange={(event) => onWeeklyChange(event.target.value)}>

              </TextField>
            </div>}
        <CardActions>
            <Button onClick={onSubmit}>
              See My Results
            </Button>
        </CardActions>


        </Card>
    );
}

MealPlanForm.propTypes = {
    mealPlan: PropTypes.string.isRequired,
    onMealPlanSelect: PropTypes.func.isRequired,
}

export default MealPlanForm;