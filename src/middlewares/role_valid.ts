import { NextFunction, Response } from "express";
import RequestExtendida from "../interfaces/request_extendida";
import handleHttp from "../utils/error_handle";
import RoleEnum from "../enums/role_enum";

export const RoleValidAdmin = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  if (req?.user?.role != RoleEnum.Admin) {
    return handleHttp(res, "", "ROLE_NOT_VALID_ONLY_ADMIN", 400);
  }
  next();
};

export const RoleValidClient = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  if (req?.user?.role != RoleEnum.Admin && req?.user?.role != RoleEnum.Client) {
    return handleHttp(res, "", "ROLE_NOT_VALID_ADMIN_OR_CLIENT", 400);
  }
  next();
};

export const RoleValidUser = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  const userRole = req?.user?.role;
  if (userRole !== RoleEnum.Admin && userRole !== RoleEnum.User) {
    return handleHttp(res, "", "ROLE_NOT_VALID_ONLY_ADMIN_OR_USER", 400);
  }
  next();
};

export const RoleValidStaff = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  const userRole = req?.user?.role;
  if (userRole !== RoleEnum.Admin && userRole !== RoleEnum.Staff) {
    return handleHttp(res, "", "ROLE_NOT_VALID_ONLY_ADMIN_OR_STAFF", 400);
  }
  next();
};

export const RoleValidStaffOrUser = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  const userRole = req?.user?.role;
  if (
    userRole !== RoleEnum.Admin &&
    userRole !== RoleEnum.Staff &&
    userRole !== RoleEnum.User
  ) {
    return handleHttp(
      res,
      "",
      "ROLE_NOT_VALID_ONLY_ADMIN_AND_STAFF_OR_USER",
      400
    );
  }
  next();
};

export const RoleValidClientOrUser = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  const userRole = req?.user?.role;
  if (userRole !== RoleEnum.Client && userRole !== RoleEnum.User) {
    return handleHttp(res, "", "ROLE_NOT_VALID_ONLY_CLIENT_AND_USER", 400);
  }
  next();
};

export const RoleValidNoGuest = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  const userRole = req?.user?.role;
  if (userRole === RoleEnum.Guest) {
    return handleHttp(res, "", "ROLE_NOT_VALID_REGISTER", 400);
  }
  next();
};
