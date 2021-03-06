import React from 'react';
import './index.less';
import { Tabs } from 'antd';
import MaintenancePlan from './MaintenancePlan';
import EquipmentFailure from './EquipmentFailure';
import PassivePlan from './PassivePlan';
import MaintenanceRecords from './MaintenanceRecords';
import ServicePlan from './ServicePlan';
import ServiceRecords from './ServiceRecords';
import PassiveMaintenanceRecord from './PassiveMaintenanceRecord';
import PassiveServiceRecords from './PassiveServiceRecords';

const { TabPane } = Tabs;

/**
 * 设备保养
 */
class EquipmentService extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      maintenancePlan: {}, // 保养计划
      servicePlan: {}, // 维修计划
      passivePlan: {}, // 被动计划
    };
  }

  changeState = (key, value) => {
    const detail = {};
    detail[key] = value;
    this.setState(detail);
  }

  render() {
    return (
      <div className="equipment-service">
        <Tabs defaultActiveKey="1">
          <TabPane tab="保养计划" key="1">
            <MaintenancePlan planItem={this.state.maintenancePlan} deviceItem={this.props.deviceItem} changeState={this.changeState} />
          </TabPane>
          <TabPane tab="保养记录" key="2">
            <MaintenanceRecords planItem={this.state.maintenancePlan} />
          </TabPane>
          <TabPane tab="被动保养记录" key="3">
            <PassiveMaintenanceRecord planItem={this.state.passivePlan} />
          </TabPane>
          <TabPane tab="维修计划" key="4">
            <ServicePlan planItem={this.state.servicePlan} deviceItem={this.props.deviceItem} changeState={this.changeState} />
          </TabPane>
          <TabPane tab="维修记录" key="5">
            <ServiceRecords planItem={this.state.servicePlan} />
          </TabPane>
          <TabPane tab="被动维修记录" key="6">
            <PassiveServiceRecords planItem={this.state.passivePlan} />
          </TabPane>
          <TabPane tab="被动计划" key="7">
            <PassivePlan planItem={this.state.passivePlan} deviceItem={this.props.deviceItem} changeState={this.changeState} />
          </TabPane>
          <TabPane tab="设备故障" key="8">
            <EquipmentFailure deviceItem={this.props.deviceItem} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default EquipmentService;
