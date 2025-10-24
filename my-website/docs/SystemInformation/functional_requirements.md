---
sidebar_position: 4
---

# Functional Requirements

Since the FlexiGather is a big system we will have many actors. The main actors are the **participants**, the **medical, sales and entrance staff** and the **administrators**.

## Funcional Requirements

The funcional requirements are used to define the function of a software system.
We will separate the requirements by actors.

### Participants Requirements
To be implemented in the **user interface**.

- The participants will have access to their data, such as personal info and balance.
- Allow the participants to enter and leave the premises.
- The participants can be admitted to the medical center.
- The participants can add money to their account.
- The participants can buy a product.
- The participants can exchange a product.
- The participants can raise their balance in the end of the event.
- The participants can receive a *push message* from the medical center.

### Medical Requirements
To be implemented in the **medical interface**.

- The medical staff can access the participant's pre-filled medical file.
- The medical staff can create a new treatment file for a participant.
- The medical staff can access the participant's treatment file's history.
- The medical staff can admit a patient.
- The medical staff will have acces to medical reports.

### Sales Requirements
To be implemented in the **kiosk interface**.

**Point of sale**
- Allow the registration of a sale.
- Allow the exchange of a product.
- The sales staff can consult the stock of the products.

**Loading point**
- Allow money to be loaded into the accounts of the participants.
- Return the remaining balance of the participants, at the end of the event.

**Both**
- The sales staff can see the participant's balance.

### Administration Requirements
To be implemented in the **administration interface**.

- Allow the check-in of the participants.
- Allow the check-out of the participants.
- Allow the registration of participants.
- Allow the registration of staff.
- Allow the registration of all the entities related to the event theme.
- The administration staff can access the participants personal information.
- The administration staff can access the current products stock.
- Offer workflow informations.
- Update and replace product stock.

To be implemented in the **dashboard**.

- The administration staff can access all the participants entrance and exit flow.
- The administration staff can access the medical center history.
- The administration staff can access which sales or loading points are open or closed.


### Entrance Requirements (staff at the entrance of the event)
To be implemented in the **access interface**.

- Record entries of the participants.
- Record exits of the participants.

### General Requirements

The system should allow **all its users** to:
- Login and logout.
- Change their password.
- Have specialized accesses according to their role.
- Filter data in the interfaces they use.

<!-- r -->