import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { where } from 'sequelize';
import { time } from 'console';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getprice(year: number) {
    const sales = await this.prisma.sale.findMany({
      where: {
        time: {
          gte: `${year}-01-01T00:00:00Z`,
          lte: `${year}-12-31T23:59:59Z`,
        },
      },
      include: {
        garden: true,
        vegetable: true,
      },
    });
    const summary = [];

    for (const sale of sales) {
      const date = new Date(sale.time);
      const dayKey = date.toISOString().split('T')[0];
      const weekKey = `W${this.getWeekNumber(date)}`;
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

      var exist = summary.findIndex((obj) => obj.id * 1 === sale.vegetableid);
      if (exist >= 0) {
        if (!summary[exist].sale[date.getFullYear()]) {
          summary[exist].sale[date.getFullYear()] = {};
          summary[exist].sale[date.getFullYear()].date = [];
          summary[exist].sale[date.getFullYear()].date.summary[exist].sale[
            date.getFullYear()
          ].date.push({
            date: dayKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].week = [];
          summary[exist].sale[date.getFullYear()].week.push({
            week: weekKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].month = [];
          summary[exist].sale[date.getFullYear()].month.push({
            month: monthKey,
            quantity: sale.quantity,
            total: sale.total,
          });
        } else {
          summary[exist].sale[date.getFullYear()].date.push({
            date: dayKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].week.push({
            week: weekKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].month.push({
            month: monthKey,
            quantity: sale.quantity,
            total: sale.total,
          });
        }
      } else {
        var sum = {
          ...sale.vegetable,
          sale: {},
        };
        sum.sale[date.getFullYear()] = {
          date: [],
          week: [],
          month: [],
        };
        sum.sale[date.getFullYear()].date.push({
          date: dayKey,
          quantity: sale.quantity,
          total: sale.total,
        });
        sum.sale[date.getFullYear()].week.push({
          week: weekKey,
          quantity: sale.quantity,
          total: sale.total,
        });
        sum.sale[date.getFullYear()].month.push({
          month: monthKey,
          quantity: sale.quantity,
          total: sale.total,
        });
        summary.push({
          ...sum,
        });
      }
    }

    return summary;
  }

  async getpriceBaseUser(year: number, idu) {
    var garden = await this.prisma.garden.findMany(
      {
        where : {userid : idu*1}
      }
    )

    var ids = []

    for (var g of garden){
      ids.push(g.id);
    }
    const sales = await this.prisma.sale.findMany({
      where: {
        gardenid : {
          in: ids
        },
        time: {
          gte: `${year}-01-01T00:00:00Z`,
          lte: `${year}-12-31T23:59:59Z`,
        },
      },
      include: {
        garden: true,
        vegetable: true,
      },
    });
    const summary = [];

    for (const sale of sales) {
      const date = new Date(sale.time);
      const dayKey = date.toISOString().split('T')[0];
      const weekKey = `W${this.getWeekNumber(date)}`;
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

      var exist = summary.findIndex((obj) => obj.id * 1 === sale.vegetableid);
      if (exist >= 0) {
        if (!summary[exist].sale[date.getFullYear()]) {
          summary[exist].sale[date.getFullYear()] = {};
          summary[exist].sale[date.getFullYear()].date = [];
          summary[exist].sale[date.getFullYear()].date.summary[exist].sale[
            date.getFullYear()
          ].date.push({
            date: dayKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].week = [];
          summary[exist].sale[date.getFullYear()].week.push({
            week: weekKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].month = [];
          summary[exist].sale[date.getFullYear()].month.push({
            month: monthKey,
            quantity: sale.quantity,
            total: sale.total,
          });
        } else {
          summary[exist].sale[date.getFullYear()].date.push({
            date: dayKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].week.push({
            week: weekKey,
            quantity: sale.quantity,
            total: sale.total,
          });
          summary[exist].sale[date.getFullYear()].month.push({
            month: monthKey,
            quantity: sale.quantity,
            total: sale.total,
          });
        }
      } else {
        var sum = {
          ...sale.vegetable,
          sale: {},
        };
        sum.sale[date.getFullYear()] = {
          date: [],
          week: [],
          month: [],
        };
        sum.sale[date.getFullYear()].date.push({
          date: dayKey,
          quantity: sale.quantity,
          total: sale.total,
        });
        sum.sale[date.getFullYear()].week.push({
          week: weekKey,
          quantity: sale.quantity,
          total: sale.total,
        });
        sum.sale[date.getFullYear()].month.push({
          month: monthKey,
          quantity: sale.quantity,
          total: sale.total,
        });
        summary.push({
          ...sum,
        });
      }
    }

    return summary;
  }

  private getWeekNumber(d: Date) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil(
      ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
    );
    return weekNo;
  }

  async getpriceall() {
    const sales = await this.prisma.sale.findMany({
      include: {
        garden: true,
        vegetable: true,
      },
    });
    const summary = [];

    for (const sale of sales) {
      const date = new Date(sale.time);
      const dayKey = date.toISOString().split('T')[0];
      const weekKey = `W${this.getWeekNumber(date)}`;
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

      var exist = summary.findIndex((obj) => obj.id * 1 === sale.vegetableid);
      if (exist >= 0) {
        var d = date.getFullYear()
        if (!summary[exist].sale[date.getFullYear()]) {
          summary[exist].sale[date.getFullYear()] = {};
          summary[exist].sale[date.getFullYear()].date = {};
          summary[exist].sale[date.getFullYear()].date[dayKey] = sale.total;
          summary[exist].sale[date.getFullYear()].week = {};
          summary[exist].sale[date.getFullYear()].week[weekKey] = sale.total;
          summary[exist].sale[date.getFullYear()].month = {};
          summary[exist].sale[date.getFullYear()].month[monthKey] = sale.total;
        } else {
          summary[exist].sale[date.getFullYear()].date[dayKey] = summary[exist]
            .sale[date.getFullYear()].date[dayKey]
            ? summary[exist].sale[date.getFullYear()].date[dayKey] * 1 + sale.total
            : 0 + sale.total;
          summary[exist].sale[date.getFullYear()].week[weekKey] = summary[exist]
            .sale[date.getFullYear()].week[weekKey]
            ? summary[exist].sale[date.getFullYear()].week[weekKey] * 1 + sale.total
            : 0 + sale.total;
          summary[exist].sale[date.getFullYear()].month[monthKey] = summary[
            exist
          ].sale[date.getFullYear()].month[monthKey]
            ? summary[exist].sale[date.getFullYear()].month[monthKey] * 1 + sale.total
            : 0 + sale.total;
        }
      } else {
        var sum = {
          ...sale.vegetable,
          sale: {},
        };
        sum.sale[date.getFullYear()] = {
          date: {},
          week: {},
          month: {},
        };
        sum.sale[date.getFullYear()].date[dayKey] = sale.total;
        sum.sale[date.getFullYear()].week[weekKey] = sale.total;
        sum.sale[date.getFullYear()].month[monthKey] = sale.total;
        summary.push({
          ...sum,
        });
      }
    }

    return summary;
  }
  
   async getpriceallBaseUser(idu) {
    var garden = await this.prisma.garden.findMany(
      {
        where : {userid : idu*1}
      }
    )

    var ids = []

    for (var g of garden){
      ids.push(g.id);
    }
    const sales = await this.prisma.sale.findMany({
      where: {
        gardenid: {
          in :ids
        }
      },
      include: {
        garden: true,
        vegetable: true,
      },
    });
    const summary = [];

    for (const sale of sales) {
      const date = new Date(sale.time);
      const dayKey = date.toISOString().split('T')[0];
      const weekKey = `W${this.getWeekNumber(date)}`;
      const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

      var exist = summary.findIndex((obj) => obj.id * 1 === sale.vegetableid);
      if (exist >= 0) {
        var d = date.getFullYear()
        if (!summary[exist].sale[date.getFullYear()]) {
          summary[exist].sale[date.getFullYear()] = {};
          summary[exist].sale[date.getFullYear()].date = {};
          summary[exist].sale[date.getFullYear()].date[dayKey] = sale.total;
          summary[exist].sale[date.getFullYear()].week = {};
          summary[exist].sale[date.getFullYear()].week[weekKey] = sale.total;
          summary[exist].sale[date.getFullYear()].month = {};
          summary[exist].sale[date.getFullYear()].month[monthKey] = sale.total;
        } else {
          summary[exist].sale[date.getFullYear()].date[dayKey] = summary[exist]
            .sale[date.getFullYear()].date[dayKey]
            ? summary[exist].sale[date.getFullYear()].date[dayKey] * 1 + sale.total
            : 0 + sale.total;
          summary[exist].sale[date.getFullYear()].week[weekKey] = summary[exist]
            .sale[date.getFullYear()].week[weekKey]
            ? summary[exist].sale[date.getFullYear()].week[weekKey] * 1 + sale.total
            : 0 + sale.total;
          summary[exist].sale[date.getFullYear()].month[monthKey] = summary[
            exist
          ].sale[date.getFullYear()].month[monthKey]
            ? summary[exist].sale[date.getFullYear()].month[monthKey] * 1 + sale.total
            : 0 + sale.total;
        }
      } else {
        var sum = {
          ...sale.vegetable,
          sale: {},
        };
        sum.sale[date.getFullYear()] = {
          date: {},
          week: {},
          month: {},
        };
        sum.sale[date.getFullYear()].date[dayKey] = sale.total;
        sum.sale[date.getFullYear()].week[weekKey] = sale.total;
        sum.sale[date.getFullYear()].month[monthKey] = sale.total;
        summary.push({
          ...sum,
        });
      }
    }

    return summary;
  }
}
