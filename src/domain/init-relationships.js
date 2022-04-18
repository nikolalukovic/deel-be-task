import { Profile } from "./identity/model/profile.js";
import { Job } from "./jobs/model/job.js";
import { Contract } from "./contracts/model/contract.js";

Profile.hasMany(Contract, { as: "Contractor", foreignKey: "ContractorId" });
Contract.belongsTo(Profile, { as: "Contractor" });
Profile.hasMany(Contract, { as: "Client", foreignKey: "ClientId" });
Contract.belongsTo(Profile, { as: "Client" });
Contract.hasMany(Job);
Job.belongsTo(Contract);
