import PropTypes from 'prop-types';
import { makeStyles, useTheme, Typography, Table, TableHead, TableRow, TableCell, TableBody, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tableName: {
		flexGrow: 1,
		flexShrink: 0,
		marginRight: theme.spacing(2)
	},
	tableHeader: {
		padding: theme.spacing(2)
	},
	tableHeaderCell: {
		position: "sticky",
		top: 0,
		backgroundColor: theme.palette.background.paper
	},
	roundName: {
		textAlign: "right"
	}
}))

const DriversChampionshipTable = props => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Toolbar className={classes.tableHeader}>
					<Typography variant="h6" component="h3" className={classes.tableName}>
						Drivers Championship
					</Typography>
					<Typography variant="caption" className={classes.roundName}>
						{"after round\u00A0" + props.data.round}
					</Typography>
			</Toolbar>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell className={classes.tableHeaderCell}>Pos.</TableCell>
						<TableCell className={classes.tableHeaderCell}>Driver</TableCell>
						<TableCell className={classes.tableHeaderCell}>Points</TableCell>
						<TableCell className={classes.tableHeaderCell}>Wins</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.data.DriverStandings.map(row => (
						<TableRow key={row.Driver.driverId}>
							<TableCell>{row.position}</TableCell>
							<TableCell>{`${row.Driver.givenName} ${row.Driver.familyName}`}</TableCell>
							<TableCell>{row.points}</TableCell>
							<TableCell>{row.wins}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

DriversChampionshipTable.propTypes = {
	year: PropTypes.string,
	data: PropTypes.shape({
		DriverStandings: PropTypes.array,
		round: PropTypes.string,
		season: PropTypes.string
	})
}

DriversChampionshipTable.defaultProps = {
	year: "current"
}


export default DriversChampionshipTable