import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { PropertyView } from "./Modal";

export function AddCard() {
	const [openView, setOpenView] = useState(false);
	return (
		<>
			<Col>
				<Card onClick={() => setOpenView(true)}>
					<Card.Body>
						<div className="add-text">
							Add
							<br />+
						</div>
					</Card.Body>
				</Card>
			</Col>
			<PropertyView open={openView} setOpen={setOpenView} />
		</>
	);
}

export function ListingCards({ listings }) {
	// Handle modal
	const [openView, setOpenView] = useState(false);

	// Check
	if (!listings) {
		return null;
	}

	return (
		<>
			{listings.map((value, index) => {
				return (
					<Col key={index}>
						<Card onClick={() => setOpenView(true)}>
							<Card.Img variant="top" src={value.picture} />
							<Card.Body>
								<Card.Title>{value.name}</Card.Title>
								<Card.Text>
									<LocationOnOutlinedIcon
										style={{ color: "#209fa8", marginRight: "0.5rem" }}
									/>
									{value.address}
								</Card.Text>
								<div className="tags">
									<div className="tag">
										<BedOutlinedIcon className="icon" /> {value.bedrooms} bed
									</div>
									<div className="tag">
										<BathtubOutlinedIcon className="icon" />
										{value.bathrooms} bath
									</div>
									<div className="tag">
										<CropOutlinedIcon className="icon" />
										360 sq. m.
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				);
			})}

			<PropertyView open={openView} setOpen={setOpenView} />
		</>
	);
}
