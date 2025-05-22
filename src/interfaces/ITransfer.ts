export default interface ITransfer {
  id: number;
  originAccount: string;
  destinationAccount: string;
  ammount: number;
  dateToTransfer: string;
  transferFee: number;
}